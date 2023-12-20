const mongoose = require('mongoose');

const deviceDataSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    unique: true // Garante que seja único
  },
  humidity: Number,
  temperature: Number,
  doorStatus: String,
  timestamp: { type: String }
});

const DeviceData = mongoose.model('DeviceData', deviceDataSchema);

module.exports = DeviceData;
