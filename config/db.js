const mongoose = require('mongoose');
require('dotenv').config();

let isConnected = false; // Track connection status

const connectDB = async () => {
    if (isConnected) return; 

    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        isConnected = db.connections[0].readyState;
        console.log("Connected to the Heavenly Cluster...");
    } catch (err) {
        console.error("Connection Failed:", err.message);
        // Do not process.exit(1) in Serverless, just throw the error
        throw err;
    }
};

module.exports = connectDB;