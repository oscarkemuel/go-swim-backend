import { WorkoutRepository } from "@repositories/WorkoutRepository"

export class DashboardService {
  async getCards() {
    const result = await WorkoutRepository.createQueryBuilder("workout")
      .select("SUM(workout.timeInSeconds)", "totalInSeconds")
      .addSelect("MAX(workout.meters)", "maxMeters")
      .addSelect("SUM(workout.meters)", "totalMeters")
      .getRawOne<{
        totalInSeconds: string;
        maxMeters: string;
        totalMeters: string;
      }>();

    const totalInSeconds = Number(result?.totalInSeconds) || 0;
    const totalHours = Math.floor(totalInSeconds / 3600);
    const maxMeters = Number(result?.maxMeters) || 0;
    const totalMeters = Number(result?.totalMeters) || 0;
    const totalKms = totalMeters / 1000;

    return {
      totalHours,
      maxMeters,
      totalKms
    };
  }
}