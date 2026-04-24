const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: { type: String, required: true },
    content: { type: String, required: true },
    status: { type: String, default: 'Ascending' }, // The "Up-Serve" status
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Message', MessageSchema);