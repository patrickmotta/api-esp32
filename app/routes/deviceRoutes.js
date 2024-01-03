// app/routes/deviceRoutes.js
const express = require('express');
const expressWs = require('express-ws');
const deviceController = require('../controllers/deviceController');
const userController = require('../controllers/userController');


const router = express.Router();
expressWs(router);


router.post('/device-data', deviceController.createDeviceData);
// Rota para atualizar dados do dispositivo
router.put('/device-data', deviceController.updateDeviceData);
router.get('/device-data/status/openDoor', deviceController.getOpenDoor);
router.post('/device-data/openDoor', deviceController.openDoor);
router.ws('/user/devices/realTime', userController.deviceWebsocket)

module.exports = router;
