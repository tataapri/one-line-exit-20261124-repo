import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I hereby resign — after five years of 'we're like family here,' I've decided to get emancipated. My last day is Friday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
