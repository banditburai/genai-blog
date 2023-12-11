import { z, defineCollection, reference } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string().max(60, {
        message: "Title must be 60 characters or less.",
      }),
      description: z.string().max(160, {
        message: "Description must be 160 characters or less.",
      }),
      date: z.date(),
      cover: z.object({
        src: z.string(),
        alt: z.string(),
      }),
      author: reference("team"),
      category: z.string().default("General"),
      tags: z.array(z.string()).optional(),
      relatedPosts: z.array(reference("posts")).optional(),
      draft: z.boolean().optional(),
    }),
  }),
  team: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z.object({
        name: z.string(),
        bio: z.string(),
        email: z.string(),
        role: z.enum(["Software", "Design", "Marketing"]),
        headshot: image(),
      }),
  }),
 
};