import { FakeTime } from "std/testing/time.ts";
import { assertEquals } from "std/assert/assert_equals.ts";
import { discord } from "./discord.ts";
Deno.test("Twitter", () => {
  const gen = discord(8n, 10n)
  const fakeTime = new FakeTime(1693589096379)
  assertEquals(gen(), 1147220562298314752n);
});
