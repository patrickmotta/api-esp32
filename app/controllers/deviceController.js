import DeviceData from '../models/deviceData.js';
import timestamp from '../services/timestamp.js';

const createDeviceData = async (req, res) => {
  try {
    const { deviceId, humidity, temperature, doorStatus } = req.body;
    const newDeviceData = new DeviceData({
      deviceId,
      humidity,
      temperature,
      doorStatus,
      openDoor: false
    });
    await newDeviceData.save();
    res.status(201).json({ message: 'Device data created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const updateDeviceData = async (req, res) => {
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
      { humidity, temperature, doorStatus, timestamp: dateTime, },
      { new: true } // Para retornar o documento atualizado
    );

    if (!updatedDevice) {
      return res.status(404).json({ error: 'Device not found' });
    }
    // console.log(updatedDevice)
    return res.status(200).json({ message: 'Device data updated successfully', updatedDevice });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOpenDoor = async (req, res) => {
  try {
    const { deviceId } = req.query;
    console.log(req.query)
    // console.log(deviceId)
    // Verifica se o deviceId foi fornecido no corpo da requisição
    if (!deviceId) {
      return res.status(400).json({ error: 'deviceId is required' });
    }
    const doorStatus = await DeviceData.findOne(
      { deviceId }
    );
    if (!doorStatus) {
      return res.status(404).json({ error: 'Device not found' });
    }
    console.log(doorStatus)
    let openDoor = doorStatus.openDoor
    return res.status(200).json({ openDoor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const openDoor = async (req, res) => {
  try {
    const { deviceId, openDoor } = req.body;
    // console.log(deviceId)
    // Verifica se o deviceId foi fornecido no corpo da requisição
    if (!deviceId) {
      return res.status(400).json({ error: 'deviceId is required' });
    }
    const updatedDevice = await DeviceData.findOneAndUpdate(
      { deviceId },
      {openDoor: openDoor}
    );
    if (!updatedDevice) {
      return res.status(404).json({ error: 'Device not found' });
    }
    return res.status(200).json({ message: 'Device data updated successfully', deviceId, openDoor });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


export { createDeviceData, updateDeviceData, getOpenDoor, openDoor }