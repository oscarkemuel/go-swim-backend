import { Router } from "express";

const workoutRouter = Router();

workoutRouter.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Swim Tracker API",
  });
});

export default workoutRouter;