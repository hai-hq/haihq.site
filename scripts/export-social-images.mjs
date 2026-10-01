import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nextApp = join(root, ".next", "server", "app");

const exports = [
  { from: "opengraph-image.body", to: join(root, "public", "og.png") },
  { from: "twitter-image.body", to: join(root, "public", "twitter.png") },
];

for (const { from, to } of exports) {
  await mkdir(dirname(to), { recursive: true });
  await copyFile(join(nextApp, from), to);
}

console.log(
  "Wrote public/og.png and public/twitter.png from the production build.",
);
