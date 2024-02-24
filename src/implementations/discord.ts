import { IDGenerator, idgen } from "../generator.ts";
import { fixed } from "../parts/fixed.ts";
import { millis } from "../parts/millis.ts";
import { sequence } from "../parts/sequence.ts";

const discord = (workerID: bigint, processID: bigint): IDGenerator => {
  return idgen(millis(1420070400000, 41n), fixed(workerID, 5n), fixed(processID, 5n), sequence(12n))
};

export { discord }
