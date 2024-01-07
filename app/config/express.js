
import express from 'express';
import expressWs from 'express-ws';
import bodyParser from'body-parser' ;
import deviceRoutes from '../routes/deviceRoutes.js';
import connectDB from './database.js';

const app = express();
expressWs(app);

connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', deviceRoutes);

export default app;
