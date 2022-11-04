import express, { Request, Response } from "express";
import { router } from "./routes/todoRoutes";
import cors from "cors";
import dotenv from "dotenv";
import colors from "colors";
import { connectDB } from "./config/db";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use("/api/v1/todo", router);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listenindddedeg on port ${PORT}`);
});
