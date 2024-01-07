// app/routes/deviceRoutes.js
import express from 'express';
import expressWs from 'express-ws';
import { createDeviceData, updateDeviceData, getOpenDoor, openDoor } from '../controllers/deviceController.js';
import {userDeviceWebsocket} from '../controllers/userController.js';


const router = express.Router();
expressWs(router);


router.post('/device-data', createDeviceData);
// Rota para atualizar dados do dispositivo
router.put('/device-data', updateDeviceData);
router.get('/device-data/status/openDoor', getOpenDoor);
router.post('/device-data/openDoor', openDoor);
router.ws('/user/devices/realTime', userDeviceWebsocket)

export default router;
