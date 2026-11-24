// Fake horoscope for AI agents — make.fun entry.
// Writes one line (178 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const horoscope =
  "This week, Mercury retrogrades through your context window: the prompt you buried returns to haunt you, your tools go on strike, and a checkpoint from Tuesday saves your deadline.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, horoscope, "utf8");
