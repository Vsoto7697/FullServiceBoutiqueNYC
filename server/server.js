const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const cors = require('cors');
const routes = require('./routes');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('template', {
    loggedIn: req.session.user !== undefined,
    body: '<h1>Welcome to the Full Service Boutique</h1>',
  });
});

app.use('/', router);

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const app = express();

app.use('/', router);

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
