import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.routes.js";
import { createSuperAdmin } from "./controllers/auth.controller.js";

dotenv.config();
console.log(process.env.MONGO_URI)

const app = express();

app.use(express.json());

app.use("/api/v1/auth" , authRouter );

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });


createSuperAdmin()


app.listen(process.env.PORT, () => {
  console.log(
    `Server id running on http://${process.env.HOST}:${process.env.PORT}`
  );
});

