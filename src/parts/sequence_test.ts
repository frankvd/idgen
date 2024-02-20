import { sequence } from "./sequence.ts"
import { assertEquals } from "std/assert/mod.ts"

Deno.test("Part: sequence", () => {
  const s = sequence(3n)
  assertEquals(s.generate(), 0n)
  assertEquals(s.generate(), 1n)
  assertEquals(s.generate(), 2n)
  assertEquals(s.generate(), 3n)
  assertEquals(s.generate(), 4n)
  assertEquals(s.generate(), 5n)
  assertEquals(s.generate(), 6n)
  assertEquals(s.generate(), 7n)
  assertEquals(s.generate(), 0n)
  assertEquals(s.generate(), 1n)
});
