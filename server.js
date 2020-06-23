const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Load Config
dotenv.config({path: './config/config.env'});

// Initialize App
const app = express();

// Connect DB
connectDB();

if (process.env.NODE_ENV === "development") {
    app.use(morgan('dev'));
}

// Routes
app.use('/auth', require('./routes/auth'));

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)