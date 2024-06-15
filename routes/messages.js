const express = require('express');
const router = express.Router();
const { createMessage, getAllMessages } = require('../controllers/messageController');
const auth = require('../midlleware/auth');


router.post('/', createMessage);


router.get('/', auth, getAllMessages);

module.exports = router;
