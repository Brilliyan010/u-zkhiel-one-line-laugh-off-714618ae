// One-Line Laugh-Off — u-zkhiel-one-line-laugh-off-714618ae
// Writes exactly one funny line to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  `My houseplants staged an intervention: watering them "whenever I remember" isn't a care plan, it's a hostage negotiation.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
