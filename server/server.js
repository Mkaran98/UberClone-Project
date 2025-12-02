import express from "express";
import connectDB from "./db.js";

const app = express();

connectDB();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({ status: "server running" });
});

app.listen(port, () => {
  console.log(`server running is on ${port}`);
});
