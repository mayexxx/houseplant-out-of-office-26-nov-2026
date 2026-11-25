import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "I’m currently OOO as I’ve withered into a handful of brown cornflakes. Send water or a priest.");
const content = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (content.length !== 94 || content.includes("\n") || content.includes("\r") || content !== "I’m currently OOO as I’ve withered into a handful of brown cornflakes. Send water or a priest.") {
  throw new Error(`Unexpected entry content: ${JSON.stringify(content)}`);
}
