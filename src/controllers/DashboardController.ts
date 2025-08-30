import { DashboardService } from "@/services/DashboardService";
import { NextFunction, Request, Response } from "express";

const service = new DashboardService()

export class DashboardController {
  static async getCards(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await service.getCards();
      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
}