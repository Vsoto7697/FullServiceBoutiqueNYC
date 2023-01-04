const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/my-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});