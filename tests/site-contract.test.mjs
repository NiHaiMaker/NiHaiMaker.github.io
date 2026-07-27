import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);
const output = new URL("../out/", import.meta.url);

test("exports the personal software portfolio", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /NiHaiMaker/);
  assert.match(html, /独立软件作品集/);
  assert.match(html, /把想法做成/);
  assert.match(html, /PurrClick/);
  assert.match(html, /v1\.1\.4/);
  assert.match(html, /v1\.1\.3/);
  assert.match(html, /id="changelog"/);
  assert.match(html, /更新日志/);
  assert.match(html, /v1\.1\.2/);
  assert.match(html, /v1\.1\.1/);
  assert.match(html, /SchemaVersion = 1/);
  assert.match(html, /Windows 10/);
  assert.match(html, /og\.png/);
  assert.match(
    html,
    /https:\/\/purrclick-update-1252241379\.cos\.ap-guangzhou\.myqcloud\.com\/releases\/PurrClick-1\.1\.4\.exe/,
  );
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|SkeletonPreview/);
});

test("keeps GitHub Pages deployment files in place", async () => {
  await Promise.all([
    access(new URL(".github/workflows/deploy-pages.yml", root)),
    access(new URL("public/.nojekyll", root)),
    access(new URL("public/og.png", root)),
  ]);
});
