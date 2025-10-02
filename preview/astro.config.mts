import { defineConfig } from "astro/config";
import { bundledLanguages } from "shiki";

import hurl from "../grammar/hurl.tmlanguage.json" with { type: "json" };

// https://astro.build/config
export default defineConfig({
    markdown: {
        shikiConfig: {
            langs: [
                ...Object.values(bundledLanguages),
                {
                    ...(hurl as any),
                    name: "hurl",
                    embeddedLangs: ["json", "graphql", "csv", "xml"],
                },
            ],
        }
    }
});
