import { IDPart } from "../generator.ts";

const sequence = (size: bigint, initial = 0n, step = 1n, throwOnLimit = false): IDPart => {
  let i = initial
  const limit = 2n ** size
  return {
    generate: () => {
      if (i >= limit) {
        if (throwOnLimit) throw new Error("Sequence limit reached");
        i = initial
      }
      i += step;
      return i - step;
    },
    size
  }
}

export { sequence }
