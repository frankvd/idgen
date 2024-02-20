import { IDPart } from "../generator.ts";

const sequence = (size: bigint, initial = 0n, step = 1n): IDPart => {
  let i = initial
  return {
    generate: () => ((i+=step) - step) % 2n**size,
    size
  }
}

export { sequence }
