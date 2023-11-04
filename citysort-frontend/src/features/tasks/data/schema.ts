import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  collectionId: z.string(),
  collectionName: z.string(),
  created: z.string(),
  updated: z.string(),
  id: z.string(),
  score: z.number(),
  title: z.string(),
  profile: z.string(),
  label: z.string(),
  hra: z.string(),
  population: z.number(),
  internet_speed: z.number(),
  language: z.string(),
  json: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
