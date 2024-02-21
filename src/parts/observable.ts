import { IDPart } from "../generator.ts";


const observe = (part: IDPart, onChange: () => void): IDPart => {
  let prev: bigint|null = null
  return {
    generate: () => {
      const value = part.generate()
      if (prev != null && value != prev) {
        onChange()
      }
      prev = value
      return value
    },
    size: part.size
  }
}

export { observe }
