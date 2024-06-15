const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const auth = require('../midlleware/auth');


router.post('/register', registerUser);


router.post('/login', loginUser);


router.get('/user', auth, getUser);

module.exports = router;
