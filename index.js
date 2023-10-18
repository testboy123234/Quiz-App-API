import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from"cors";
dotenv.config();

import quizRoutes from "./routes/quizRoutes.js";


const app = express();

app.use(express.json());

const corsOptions = {
  origin: process.env.ALLOWED_ORIGIN || "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Connected to Backend!" });
});

app.use("/api/v1/quizzes", quizRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("App connected to database");
    const PORT = process.env.PORT || 5000;
    app.listen(process.env.PORT, () => {
      console.log(`App is listening port is ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export default app;
