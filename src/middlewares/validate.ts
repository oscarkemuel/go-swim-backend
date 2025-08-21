import { z, ZodError } from "zod"
import { Request, Response, NextFunction } from 'express'

export const validate = (schema: z.ZodSchema<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = schema.parse(req.body)
      next()
    } catch (error: ZodError | any) {
      console.error(error)
      res.status(400).json({ 
        error: "Validation error",
        issues: error instanceof ZodError ? JSON.parse(error.message) : [{ message: error.message }]
      })
    }
  }
}
