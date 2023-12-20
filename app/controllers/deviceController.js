
const DeviceData = require('../models/deviceData');
const timestamp = require('../services/timestamp')

exports.createDeviceData = async (req, res) => {
  try {
    const { deviceId, humidity, temperature, doorStatus } = req.body;
    const newDeviceData = new DeviceData({
      deviceId,
      humidity,
      temperature,
      doorStatus
    });
    await newDeviceData.save();
    res.status(201).json({ message: 'Device data created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateDeviceData = async (req, res) => {
  try {
    const { deviceId, humidity, temperature, doorStatus } = req.body;
    // console.log(deviceId)
    // Verifica se o deviceId foi fornecido no corpo da requisição
    if (!deviceId) {
      return res.status(400).json({ error: 'deviceId is required' });
    }
    let dateTime = timestamp(Date.now())
    const updatedDevice = await DeviceData.findOneAndUpdate(
      { deviceId },
      { humidity, temperature, doorStatus,timestamp: dateTime },
      { new: true } // Para retornar o documento atualizado
    );

    if (!updatedDevice) {
      return res.status(404).json({ error: 'Device not found' });
    }
    console.log(updatedDevice)
    return res.status(200).json({ message: 'Device data updated successfully', updatedDevice });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
