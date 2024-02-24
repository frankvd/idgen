import { twitter } from "./implementations/twitter.ts";
import { syncGenerator, asyncGenerator } from "./generator.ts";

Deno.bench("Generator", { group: "generator", baseline: true }, () => {
  const gen = twitter(1n)
  for (let i = 0; i<4096; i++) {
    gen()
  }
});

Deno.bench("Async generator", {group: "generator" }, async () => {
  const gen = asyncGenerator(twitter(1n))
  for (let i = 0; i<4096; i++) {
    await gen()
  }
});


Deno.bench("Sync generator", {group: "generator" }, () => {
  const gen = syncGenerator(twitter(1n))
  for (let i = 0; i<4096; i++) {
    gen()
  }
});
