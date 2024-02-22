import { assertEquals } from "std/assert/mod.ts";
import { random } from "./random.ts";

Deno.test("Part: random", () => {
  const r = random(10n)
  let min = 0n, max = 0n;
  for(let i=0;i<1000000;i++) {
    const val = r.generate();
    if (val < min) min = val;
    if (val > max) max = val;
  }
  assertEquals(min, 0n);
  assertEquals(max, 1023n);
});
