import { IDGenerator, idgen } from "../generator.ts";
import { fixed } from "../parts/fixed.ts";
import { millis } from "../parts/millis.ts";
import { observe } from "../parts/observable.ts";
import { resetable } from "../parts/resetable.ts";
import { sequence } from "../parts/sequence.ts";

const twitter = (machineID: bigint): IDGenerator => {
  const s = resetable(() => sequence(12n, 0n, 1n, true));
  const m = observe(millis(1288834974657, 41n), () => s.reset());
  return idgen(m, fixed(machineID, 10n), s)
};

export { twitter }
