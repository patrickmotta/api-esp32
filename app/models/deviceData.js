import mongoose from 'mongoose'

const deviceDataSchema = new mongoose.Schema({
  deviceId: {
    type: String,
    required: true,
    unique: true // Garante que seja único
  },
  humidity: Number,
  temperature: Number,
  doorStatus: Boolean,
  openDoor: Boolean,
  timestamp: { type: String }
});

const DeviceData = mongoose.model('DeviceData', deviceDataSchema);

export default DeviceData;
