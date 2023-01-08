const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/fullserviceboutiquenyc', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use the routes
app.use('/', routes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });