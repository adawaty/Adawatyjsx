import fs from "fs";
import path from "path";
import { transform } from "sucrase";

const ROOT = process.cwd();

const exts = new Set([".ts", ".tsx"]);
const skipDirs = new Set(["node_modules", "dist", ".git"]);

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory()) {
      if (skipDirs.has(e.name)) continue;
      walk(path.join(dir, e.name));
      continue;
    }
    const p = path.join(dir, e.name);
    const ext = path.extname(p);
    if (!exts.has(ext)) continue;

    const code = fs.readFileSync(p, "utf8");
    const isTsx = ext === ".tsx";
    const outExt = isTsx ? ".jsx" : ".js";
    const outPath = p.slice(0, -ext.length) + outExt;

    const result = transform(code, {
      transforms: isTsx ? ["typescript", "jsx"] : ["typescript"],
      jsxRuntime: "automatic",
      production: false,
    });

    fs.writeFileSync(outPath, result.code, "utf8");
    fs.unlinkSync(p);

    console.log(`${path.relative(ROOT, p)} -> ${path.relative(ROOT, outPath)}`);
  }
}

walk(path.join(ROOT, "src"));

// Convert root config
const viteTs = path.join(ROOT, "vite.config.ts");
if (fs.existsSync(viteTs)) {
  const code = fs.readFileSync(viteTs, "utf8");
  const result = transform(code, { transforms: ["typescript"], production: false });
  const out = path.join(ROOT, "vite.config.js");
  fs.writeFileSync(out, result.code, "utf8");
  fs.unlinkSync(viteTs);
  console.log(`vite.config.ts -> vite.config.js`);
}

console.log("Done.");
