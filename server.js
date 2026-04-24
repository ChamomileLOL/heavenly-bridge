const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());

// Bind the routes to the server
app.use('/api/v1', messageRoutes);

app.get('/', (req, res) => {
    res.send('<h1>The Throne is set. The Bridge is Active.</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server ascending on Port ${PORT}`));