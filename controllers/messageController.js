const Message = require('../models/Message');

// Create a new message
exports.createMessage = (req, res) => {
    const { firstName, lastName, email, phone, message } = req.body;

    const newMessage = new Message({
        firstName,
        lastName,
        email,
        phone,
        message
    });

    newMessage.save().then(message => res.json(message));
};

// Get all messages
exports.getAllMessages = (req, res) => {
    Message.find().sort({ date: -1 }).then(messages => res.json(messages));
};
