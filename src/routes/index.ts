import { Router } from "express";
import workoutRouter from "@routes/workout.routes";

const router = Router();

router.use("/workout", workoutRouter);

export default router;