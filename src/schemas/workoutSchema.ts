import { z } from "zod"

export const workoutSchema = z.object({
  date: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Invalid date format",
  }),
  meters: z.number().positive("Meters must be greater than 0"),
  fatigueLevel: z.number().min(1).max(5),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  style: z.string().optional(),
})

export const workoutUpdateSchema = workoutSchema.partial()
