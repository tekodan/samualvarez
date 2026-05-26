import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
});

export const collections = {
  articles: articlesCollection,
};
