const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define Routes
app.use('/api/messages', require('./routes/messages'));
app.use('/api/users', require('./routes/users'));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
