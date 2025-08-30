import { Router } from "express";
import workoutRouter from "@routes/workout.routes";
import dashboardRouter from "@routes/dashboard.routes";

const router = Router();

router.use("/workouts", workoutRouter);
router.use("/dashboard", dashboardRouter);

export default router;