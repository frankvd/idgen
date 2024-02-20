import { IDPart } from "../generator.ts";

const fixed = (value: bigint, size: bigint): IDPart => {
  return {
    generate: () => value,
    size
  }
}

export { fixed }
