// app/routes/deviceRoutes.js
const express = require('express');
const deviceController = require('../controllers/deviceController');

const router = express.Router();

router.post('/device-data', deviceController.createDeviceData);
// Rota para atualizar dados do dispositivo
router.put('/device-data', deviceController.updateDeviceData);
router.get('/device-data/status/openDoor', deviceController.getOpenDoor);
router.post('/device-data/openDoor', deviceController.openDoor);



module.exports = router;
