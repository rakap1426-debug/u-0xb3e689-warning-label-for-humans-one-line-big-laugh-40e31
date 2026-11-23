import { mkdirSync, writeFileSync } from "node:fs";

const line = "WARNING: May say \"I'm fine\" while clearly not fine. Do not argue. Do not ask twice. Approach slowly, with snacks.";
if (line.length < 1 || line.length > 160) throw new Error("bad length");
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
