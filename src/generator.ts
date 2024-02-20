type IDGenerator = () => bigint

interface IDPart {
  generate: IDGenerator,
  size: bigint
}

const idgen = (...parts: IDPart[]): IDGenerator => {
  const first = parts.shift()!
  return () => {
    let id = first.generate()
    for (const part of parts) {
      id <<= part.size
      id += part.generate()
    }

    return id
  }
}

export type { IDGenerator, IDPart }
export { idgen }
