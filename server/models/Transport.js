const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  capacity: { type: Number, required: true },
  status: { type: String, required: true },
});

const Transport = mongoose.model("Transport", transportSchema);

module.exports = Transport;
