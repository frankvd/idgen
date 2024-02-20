import { idgen } from "./generator.ts"
import { fixed } from "./parts/fixed.ts";
import { millis } from "./parts/millis.ts";
import { sequence } from "./parts/sequence.ts";
import { FakeTime } from "std/testing/time.ts"
import { assertEquals } from "std/assert/mod.ts"

Deno.test("Generator", () => {
  const fakeTime = new FakeTime(0)
  fakeTime.tick(1000)
  const gen = idgen(millis(), fixed(420n, 12n), sequence(10n))
  assertEquals(gen(), 4194734080n);
  fakeTime.tick(200);
  assertEquals(gen(), 5033594881n);
});
