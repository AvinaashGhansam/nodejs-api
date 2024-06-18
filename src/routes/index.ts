import express from "express";
import courseRoutes from "./courseRoutes";

const router = express.Router();

router.use("/api/courses", courseRoutes);

export default router;
