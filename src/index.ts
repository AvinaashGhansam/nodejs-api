import express from "express";
import courseRoutes from "./routes/courseRoutes";
import homePage from "./routes/homePage";
import path from "node:path";
import connectDB from "./database";
import loggingMiddleware from "./middleware/loggingMiddleware";

const app = express();

// Connect to MongoDB
void connectDB();

app.use(express.json());
app.use(loggingMiddleware);

// Set the view engine to Pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "../views"));

// Use the homepage route
app.use("/", homePage);
app.use("/api/courses", courseRoutes);

app.listen(3000, () => console.log(`Server started on port 3000`));
