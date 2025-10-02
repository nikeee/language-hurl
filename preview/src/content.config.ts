import { defineCollection, z, type CollectionEntry } from "astro:content";
import { glob } from "astro/loaders";

const samples = defineCollection({
	loader: glob({ pattern: "*.hurl", base: "../test" }),
});

export const collections = { samples };
