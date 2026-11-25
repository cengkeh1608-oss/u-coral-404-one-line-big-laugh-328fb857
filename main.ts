import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I renamed the variable, and production went down in three time zones. The variable was 'prod'.";

// D7 wins over D2/D6/D16 (23/25): the punch word 'prod' lands on the very
// last word and reframes the whole line, so the reader re-reads the first
// sentence with new eyes. "Three time zones" is the one concrete detail
// that sells the scale of the disaster.

const outDir = resolve(process.argv[2] ?? "/output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), LINE, "utf8");
