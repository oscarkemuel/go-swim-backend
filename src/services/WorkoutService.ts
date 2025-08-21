import { AppError } from "@/errors/AppError"
import { Workout } from "@entities/Workout"
import { WorkoutRepository } from "@repositories/WorkoutRepository"

export class WorkoutService {
  async create(data: Partial<Workout>) {
    const workout = WorkoutRepository.create(data)
    return await WorkoutRepository.save(workout)
  }

  async list() {
    const workouts = await WorkoutRepository.find()
    return { workouts }
  }

  async findById(id: number) {
    const workout = await WorkoutRepository.findOneBy({ id })
     if (!workout) throw new AppError("Workout not found", 404)
    return workout
  }

  async update(id: number, data: Partial<Workout>) {
    const workout = await this.findById(id)
    Object.assign(workout, data)
    return await WorkoutRepository.save(workout)
  }

  async delete(id: number) {
    const workout = await this.findById(id)
    return await WorkoutRepository.remove(workout)
  }
}
