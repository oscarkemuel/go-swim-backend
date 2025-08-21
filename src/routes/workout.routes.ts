import { validate } from "@middlewares/validate";
import { WorkoutController } from "@controllers/WorkoutController";
import { Router } from "express";
import { workoutSchema, workoutUpdateSchema } from "@schemas/workoutSchema";

const workoutRouter = Router();

workoutRouter.post("/", validate(workoutSchema), WorkoutController.create)
workoutRouter.get("/", WorkoutController.list)
workoutRouter.get("/:id", WorkoutController.findById)
workoutRouter.put("/:id", validate(workoutUpdateSchema), WorkoutController.update)
workoutRouter.delete("/:id", WorkoutController.delete)

export default workoutRouter;