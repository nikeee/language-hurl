import { defineConfig } from "astro/config";
import { bundledLanguages } from "shiki";

import hurl from "../grammars/hurl.tmlanguage.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: [
        bundledLanguages.json,
        bundledLanguages.graphql,
        bundledLanguages.csv,
        bundledLanguages.xml,
        {
          // biome-ignore lint/suspicious/noExplicitAny: :shrug:
          ...(hurl as any),
          name: "hurl",
          embeddedLangs: ["json", "graphql", "csv", "xml"],
        },
      ],
    },
  },
});
