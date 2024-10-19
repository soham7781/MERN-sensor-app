const mongoose = require('mongoose');

const SensorDataSchema = new mongoose.Schema({
  ax_g: Number,
  ay_g: Number,
  az_g: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('SensorData', SensorDataSchema);
