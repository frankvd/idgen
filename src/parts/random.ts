import { IDPart } from "../generator.ts";

const random = (size: bigint): IDPart => {
  return {
    generate: () => BigInt(Math.floor(Math.random() * (2 ** Number(size)))),
    size
  }
}

export { random }
