
const express = require('express');
const bodyParser = require('body-parser');
const deviceRoutes = require('../routes/deviceRoutes');
const connectDB = require('./database');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', deviceRoutes);

module.exports = app;
