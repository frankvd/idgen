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

const asyncGenerator = (gen: IDGenerator) => {
  const maxTries = 3;
  return async () => {
    let tries = 0;
    do {
      try {
        return gen()
      } catch {
        await new Promise(r => setTimeout(r, 1));
      }
    } while(++tries < maxTries);
    throw new Error(`Failed to generate an ID after ${tries} tries`);
  }
}

const syncGenerator = (gen: IDGenerator) => {
  const maxTries = 1000
  return () => {
    let tries = 0;
    do {
      try {
        return gen()
      } catch { /**/ }
    } while (++tries < maxTries);
    throw new Error(`Failed to generate an ID after ${tries} tries`);
  }
}

export type { IDGenerator, IDPart }
export { idgen, syncGenerator, asyncGenerator }
