import { defineCollection } from 'astro:content';
import { sampleLoader } from './loader';

const samples = defineCollection({
    loader: sampleLoader(),
});

export const collections = { samples };
