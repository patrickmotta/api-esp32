
const express = require('express');
const expressWs = require('express-ws');
const bodyParser = require('body-parser');
const deviceRoutes = require('../routes/deviceRoutes');
const connectDB = require('./database');

const app = express();
expressWs(app);

// Rota para lidar com a conexão WebSocket



// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', deviceRoutes);

module.exports = app;
