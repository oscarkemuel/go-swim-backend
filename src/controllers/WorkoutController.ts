import { NextFunction, Request, Response } from "express"
import { WorkoutService } from "@services/WorkoutService"

const service = new WorkoutService()

export class WorkoutController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const workout = await service.create(req.body)
      return res.status(201).json(workout)
    } catch (err) {
      next(err)
    }
  }

  static async list(req: Request, res: Response, next: NextFunction) {
    try {
      const workouts = await service.list()
      return res.json(workouts)
    } catch (err) {
      next(err)
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const workout = await service.findById(Number(req.params.id))
      return res.json(workout)
    } catch (err) {
      next(err)
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const workout = await service.update(Number(req.params.id), req.body)
      return res.json(workout)
    } catch (err) {
      next(err)
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await service.delete(Number(req.params.id))
      return res.status(204).send()
    } catch (err) {
      next(err)
    }
  }
}
