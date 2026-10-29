import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, copyFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));

// Run the public command against isolated images, never the saved screenshots.
test('compares renamed mockups and preserves existing screenshot output names', async () => {
  const sandbox = mkdtempSync(path.join(root, '.compare-screenshots-test-'));
  const sections = [
    ['1_home', '1_hero'],
    ['9_nuestra_trayectoria', '8_nuestra_trayectoria'],
    ['10_contacto', '9_contacto'],
    ['11_footer', '10_footer'],
  ];
  try {
    for (const dir of ['scripts', 'docs/home', 'docs/screenshots']) {
      mkdirSync(path.join(sandbox, dir), { recursive: true });
    }
    copyFileSync(path.join(root, 'scripts/compare-screenshots.mjs'),
      path.join(sandbox, 'scripts/compare-screenshots.mjs'));
    const fixture = await sharp({
      create: { width: 2, height: 2, channels: 3, background: '#ffffff' },
    }).png().toBuffer();
    for (const [mockup, actual] of sections) {
      for (const viewport of ['desktop', 'mobile']) {
        writeFileSync(path.join(sandbox, `docs/home/${mockup}_${viewport}.png`), fixture);
        writeFileSync(path.join(sandbox, `docs/screenshots/${actual}_${viewport}_actual.png`), fixture);
      }
    }
    const result = spawnSync(process.execPath, ['scripts/compare-screenshots.mjs'], {
      cwd: sandbox, encoding: 'utf8', timeout: 20000,
    });
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stderr, '');
    const expected = sections.flatMap(([, actual]) => ['desktop', 'mobile'].map(
      viewport => `✅ Comparativa generada: docs/screenshots/${actual}_${viewport}_comparison.png`,
    ));
    assert.deepEqual(result.stdout.split('\n').filter(line => line.startsWith('✅')), expected);
    assert.ok(result.stdout.endsWith('🎉 Comparativas side-by-side listas.\n'));
    const outputs = readdirSync(path.join(sandbox, 'docs/screenshots')).filter(
      file => file.endsWith('_comparison.png'),
    );
    assert.equal(outputs.length, 8);
    for (const file of outputs) {
      const metadata = await sharp(path.join(sandbox, 'docs/screenshots', file)).metadata();
      assert.equal(metadata.height, file.includes('_desktop_') ? 900 : 844);
      assert.equal(metadata.width, metadata.height * 2);
    }
  } finally {
    rmSync(sandbox, { recursive: true, force: true });
  }
});
