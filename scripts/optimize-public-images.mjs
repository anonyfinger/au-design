#!/usr/bin/env node
/**
 * public/ 내 PNG·JPEG 압축. GIF는 용량이 크면 gifsicle 또는 MP4 변환 권장.
 * 사용: node scripts/optimize-public-images.mjs
 * 필요: npm install sharp (devDependencies)
 */
import { readdir, stat } from "fs/promises";
import { join, extname } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(__dirname, "..", "public");

const IMAGE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const MAX_WIDTH = 1200;
const QUALITY = 82;
const SKIP_UNDER_KB = 30;

async function optimizeImages() {
  let sharp;
  try {
    sharp = (await import("sharp")).default;
  } catch {
    console.log("sharp 미설치. 실행: npm install -D sharp");
    process.exit(1);
  }

  const files = await readdir(publicDir);
  const gifSizes = [];

  for (const name of files) {
    const ext = extname(name).toLowerCase();
    const path = join(publicDir, name);

    const st = await stat(path);
    if (!st.isFile()) continue;

    if (ext === ".gif") {
      const kb = (st.size / 1024).toFixed(0);
      gifSizes.push({ name, kb: st.size / 1024 });
      continue;
    }

    if (!IMAGE_EXT.has(ext)) continue;
    if (st.size < SKIP_UNDER_KB * 1024) {
      console.log(`건너뜀 (이미 작음): ${name}`);
      continue;
    }

    try {
      const img = sharp(path);
      const meta = await img.metadata();
      const w = meta.width || 0;
      const needResize = w > MAX_WIDTH;

      const out = join(publicDir, `._opt_${name}`);
      let pipeline = img;
      if (needResize) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
      }
      if (ext === ".png") {
        pipeline = pipeline.png({ compressionLevel: 9 });
      } else {
        pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
      }
      await pipeline.toFile(out);

      const stOut = await stat(out);
      const saved = ((1 - stOut.size / st.size) * 100).toFixed(1);
      const { rename } = await import("fs/promises");
      await rename(out, path);
      console.log(`압축: ${name} (${(st.size / 1024).toFixed(0)}KB → ${(stOut.size / 1024).toFixed(0)}KB, -${saved}%)`);
    } catch (err) {
      console.error(`${name} 실패:`, err.message);
    }
  }

  if (gifSizes.length) {
    const total = gifSizes.reduce((a, b) => a + b.kb, 0);
    console.log("\n[GIF] 용량이 커서 별도 최적화를 권장합니다.");
    gifSizes.sort((a, b) => b.kb - a.kb).forEach(({ name, kb }) => console.log(`  ${name}: ${(kb / 1024).toFixed(1)}MB`));
    console.log(`  총 약 ${(total / 1024).toFixed(1)}MB`);
    console.log("  GIF 압축: npm run optimize-gifs (giflossy 사용)");
  }
}

optimizeImages().catch((e) => {
  console.error(e);
  process.exit(1);
});
