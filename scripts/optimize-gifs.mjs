#!/usr/bin/env node
/**
 * public/ 내 GIF 압축 (giflossy --lossy=80). 용량 30~50% 감소 가능.
 * 사용: npm run optimize-gifs
 * 필요: npm install -D giflossy
 */
import { readdir, stat, rename } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";
import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(__dirname, "..", "public");

const LOSSY = 80; // 0~200, 높을수록 화질 유지·용량 증가
const SKIP_UNDER_KB = 200; // 이미 작은 GIF는 스킵

async function getGiflossyPath() {
  try {
    const { createRequire } = await import("module");
    const require = createRequire(import.meta.url);
    const pkgRoot = dirname(require.resolve("giflossy"));
    const bin = process.platform === "win32" ? "gifsicle.exe" : "gifsicle";
    return join(pkgRoot, "vendor", bin);
  } catch {
    return null;
  }
}

async function optimizeGifs() {
  const giflossyPath = await getGiflossyPath();
  if (!giflossyPath) {
    console.log("giflossy 미설치. 실행: npm install -D giflossy");
    process.exit(1);
  }

  const files = await readdir(publicDir);
  const gifs = files.filter((f) => extname(f).toLowerCase() === ".gif");

  if (gifs.length === 0) {
    console.log("public/ 에 GIF 파일이 없습니다.");
    return;
  }

  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of gifs) {
    const inputPath = join(publicDir, name);
    const st = await stat(inputPath);
    if (st.size < SKIP_UNDER_KB * 1024) {
      console.log(`건너뜀 (이미 작음): ${name}`);
      continue;
    }

    const outPath = join(publicDir, `._opt_${name}`);

    try {
      await execFileAsync(giflossyPath, [
        "-O3",
        `--lossy=${LOSSY}`,
        "-o",
        outPath,
        inputPath,
      ]);

      const stOut = await stat(outPath);
      totalBefore += st.size;
      totalAfter += stOut.size;
      const saved = ((1 - stOut.size / st.size) * 100).toFixed(1);
      await rename(outPath, inputPath);
      console.log(
        `압축: ${name} (${(st.size / 1024 / 1024).toFixed(2)}MB → ${(stOut.size / 1024 / 1024).toFixed(2)}MB, -${saved}%)`
      );
    } catch (err) {
      console.error(`${name} 실패:`, err.message);
      try {
        await rename(join(publicDir, `._opt_${name}`), inputPath).catch(() => {});
      } catch {}
    }
  }

  if (totalBefore > 0) {
    const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
    console.log(
      `\n총 ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (약 -${totalSaved}%)`
    );
  }
}

optimizeGifs().catch((e) => {
  console.error(e);
  process.exit(1);
});
