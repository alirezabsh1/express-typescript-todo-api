import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todo.routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Todo API is running",
  });
});

app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(errorMiddleware);

export default app;