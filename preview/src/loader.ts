import * as fs from "node:fs/promises";
import type { Loader } from "astro/loaders";

async function loadSamples() {
  const files = fs.glob("../tests/**/*.hurl");

  const samples = [];
  for await (const file of files) {
    const content = await fs.readFile(file, "utf-8");
    samples.push({
      name: file.substring("../tests/".length),
      content,
    });
  }

  return samples;
}

export function sampleLoader(): Loader {
  return {
    name: "sample-loader",
    async load({ renderMarkdown, store }) {
      const entries = await loadSamples();

      store.clear();

      for (const entry of entries) {
        store.set({
          id: entry.name,
          data: entry,
          rendered: await renderMarkdown(
            `\`\`\`\`hurl\n${entry.content}\n\`\`\`\``,
          ),
        });
      }
    },
  };
}
