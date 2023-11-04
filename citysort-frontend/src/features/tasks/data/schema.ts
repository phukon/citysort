import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  score: z.number(),
  title: z.string(),
  profile: z.string(),
  label: z.string(),
  hra: z.string(),
})

export type Task = z.infer<typeof taskSchema>