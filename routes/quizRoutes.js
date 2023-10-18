import express from "express";
import { Quiz } from "../models/quizModel.js";

const quizRoutes = express.Router();

// quizRoutes.get("/", async (req, res) => {
//   try {
//     const quizs = await Quiz.find({});
//     return res.status(200).json({
//         count: quizs.length,
//       data: quizs,
//     });
//   } catch (error) {
//     res.status(500).send({
//       message: error.message,
//     });
//   }
// });

quizRoutes.get('/', async (request, response) => {
    try {
      const quizzes = await Quiz.find({});
      return response.status(200).json({
        count: quizzes.length, // make object to count
        data: quizzes,
      });
    } catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });
    }
  });

export default quizRoutes;
