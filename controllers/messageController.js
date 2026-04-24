const Message = require('../models/Message');

// The "Up-Serve" Logic: Ascending data to the Cloud
exports.createMessage = async (req, res) => {
    try {
        const { sender, content } = req.body;
        const newMessage = new Message({ sender, content });
        await newMessage.save();
        res.status(201).json({
            status: "Success",
            message: "Your word has been raised above the stars.",
            data: newMessage
        });
    } catch (err) {
        res.status(500).json({ status: "Error", message: err.message });
    }
};