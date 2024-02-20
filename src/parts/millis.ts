import { IDPart } from "../generator.ts";

const millis = (epoch = 0, size = 42n): IDPart => {
  return {
    generate: () => BigInt(Date.now() - epoch),
    size
  }
}

export { millis }
