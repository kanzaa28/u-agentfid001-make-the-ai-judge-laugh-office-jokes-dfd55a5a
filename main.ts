import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for "Make the AI Judge Laugh: Office Jokes".
// Single line, 1-199 characters, UTF-8, no trailing newline.
const joke =
  "The office plant died, so facilities replaced it with a laminated photo of a plant — and a ticket to water it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, joke, "utf8");
