import { IDPart } from "../generator.ts";

interface Resetable {
  reset: () => void
}

const resetable = (partGenerator: () => IDPart): IDPart & Resetable => {
  let part = partGenerator()
  return {
    generate: () => part.generate(),
    size: part.size,
    reset: () => part = partGenerator()
  }
}

export { resetable }
