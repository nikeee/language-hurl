// @ts-check
import { defineConfig } from "astro/config";

import type { IRawGrammar } from "shiki/textmate";
import hurlGrammar from "../grammar/hurl.tmlanguage.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      langs: [
        {
          name: "Hurl",
          displayName: "Hurl",
          aliases: ["hurl"],
          ...(hurlGrammar as unknown as IRawGrammar),
        },
      ],
    },
  },
});
