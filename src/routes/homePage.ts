import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.render("index", {
    title: "Course Home Page",
    message: "Welcome to the Course API Home Page",
  });
});

export default router;
