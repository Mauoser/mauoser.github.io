// Checks the static export in out/: every internal link and image points at a
// file that exists, and every #anchor exists on the page it names. Run after
// `npm run build`. No network, no browser.
import fs from "node:fs";
import path from "node:path";

const OUT = path.resolve("out");
if (!fs.existsSync(OUT)) {
  console.error("out/ not found: run `npm run build` first.");
  process.exit(1);
}

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) return e.name === "_next" ? [] : htmlFiles(full);
    return e.name.endsWith(".html") ? [full] : [];
  });
}

/** The file a site path is served from, as GitHub Pages resolves it. */
function fileFor(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  const candidates = clean.endsWith("/")
    ? [path.join(OUT, clean, "index.html")]
    : [path.join(OUT, clean), path.join(OUT, clean, "index.html"), path.join(OUT, `${clean}.html`)];
  return candidates.find((c) => fs.existsSync(c) && fs.statSync(c).isFile());
}

const idsCache = new Map();
function idsIn(file) {
  if (!idsCache.has(file)) {
    const html = fs.readFileSync(file, "utf8");
    idsCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsCache.get(file);
}

const problems = [];
let checked = 0;
for (const file of htmlFiles(OUT)) {
  const html = fs.readFileSync(file, "utf8");
  const page = "/" + path.relative(OUT, file).replace(/index\.html$/, "");
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (!ref.startsWith("/") && !ref.startsWith("#")) continue;
    if (ref.startsWith("//")) continue;
    checked += 1;
    const [target, hash] = ref.split("#");
    const targetFile = target ? fileFor(target) : file;
    if (!targetFile) {
      problems.push(`${page}: ${ref} → no such file`);
      continue;
    }
    if (hash && targetFile.endsWith(".html") && !idsIn(targetFile).has(hash)) {
      problems.push(`${page}: ${ref} → no element with id "${hash}"`);
    }
  }
}

if (problems.length) {
  console.error(problems.join("\n"));
  process.exit(1);
}
console.log(`Internal links and images: ${checked} checked, all resolve.`);
