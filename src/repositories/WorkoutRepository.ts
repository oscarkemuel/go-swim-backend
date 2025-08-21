import { AppDataSource } from "@/data-source";
import { Workout } from "@entities/Workout";

export const WorkoutRepository = AppDataSource.getRepository(Workout);