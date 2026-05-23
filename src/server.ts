import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./config/data-source";

dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });