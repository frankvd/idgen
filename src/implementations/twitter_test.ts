import { FakeTime } from "std/testing/time.ts";
import { twitter } from "./twitter.ts"
import { assertEquals } from "std/assert/assert_equals.ts";
Deno.test("Twitter", () => {
  const gen = twitter(378n)
  const fakeTime = new FakeTime(1656432460105)
  assertEquals(gen(), 1541815603606036480n);
});
