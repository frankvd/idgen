import { assertEquals } from "std/assert/mod.ts"
import { FakeTime } from "std/testing/time.ts"
import { millis } from "./millis.ts";

Deno.test("Part: millis", () =>  {
  const time = new FakeTime(2000)
  const m = millis(1000)
  assertEquals(m.size, 42n);
  assertEquals(m.generate(), 1000n);
  time.tick(500);
  assertEquals(m.generate(), 1500n);
  time.tick(1000);
  assertEquals(m.generate(), 2500n);
});
