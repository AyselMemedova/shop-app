const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const examSchema = mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  count: Number,
  totalPrice: Number,
});

const exam = mongoose.model("Exam", examSchema);

app.get("/api/exam", async (req, res) => {
  const resp = await exam.find();
  res.send(resp);
});

app.post("/api/exam", async (req, res) => {
  const newExam = new exam({ ...req.body });
  await newExam.save();
  res.send("item elave olundu");
});

app.put("/api/exam/:id", async (req, res) => {
  const { id } = req.params;
  const resp = await exam.findByIdAndUpdate(id, { ...req.body });
  res.send("item updated");
});

app.delete("/api/exam/:id",async (req, res) => {
  const { id } = req.params;
  const resp = await exam.findByIdAndDelete(id);
  res.send("Item deleted");
});

app.listen(process.env.PORT, (req, resp) => {
  console.log("api running");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then((resp) => {
    console.log("db connected");
  })
  .catch((error) => {
    console.log("db not connected");
  });
