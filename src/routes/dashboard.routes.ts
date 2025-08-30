import { validate } from "@middlewares/validate";
import { Router } from "express";
import { DashboardController } from "@/controllers/DashboardController";

const dashboardRouter = Router();

dashboardRouter.get("/cards", DashboardController.getCards);

export default dashboardRouter;