import express from "express";
import connectDB from "./db.js";
import dotenv, { config } from "dotenv"
dotenv.config()

const app = express();

connectDB();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ status: "server running" });
});

app.listen(port, () => {
  console.log(`server running is on ${port}`);
});
