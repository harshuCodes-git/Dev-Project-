const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const transportSchema = new mongoose.Schema({
  name: String,
  type: String,
  capacity: Number,
  status: String,
});

const Transport = mongoose.model("Transport", transportSchema);

app.get("/transports", async (req, res) => {
  const transports = await Transport.find();
  res.json(transports);
});

app.post("/transports", async (req, res) => {
  const newTransport = new Transport(req.body);
  await newTransport.save();
  res.json(newTransport);
});

app.put("/transports/:id", async (req, res) => {
  const updatedTransport = await Transport.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTransport);
});

app.delete("/transports/:id", async (req, res) => {
  await Transport.findByIdAndDelete(req.params.id);
  res.json({ message: "Transport deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
