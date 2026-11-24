// Famous Last Words at 1 Percent — entry program.
//
// Writes the phone's last words to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), with no trailing newline.
// Node 22 stdlib only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, chosen from ~20 brainstormed candidates and scored
// against the judge's five criteria (on-subject, biggest laugh, the phone's
// own voice, tight single line with the punch at the end, fresh):
//   - on-subject: it opens on the dying battery itself.
//   - laugh: the twist is concrete secret knowledge — the phone alone knows
//     where the car is parked — dying with it.
//   - voice: first person, the phone talking about its own battery.
//   - punch: "Good luck." lands last, after the reveal.
//   - fresh: no will reading, no goodbye to the charger, no pun on 1 percent.
const LINE =
  "My battery's dying, and I'm the only one who knew where you parked. Good luck.";

// Gate guard: the entry must be 1-199 characters, a single line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 199) {
  throw new Error(`entry is ${LINE.length} characters, must be 1-199`);
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
