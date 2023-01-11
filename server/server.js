const path = require('path');
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const handlebars = require('handlebars');
const cors = require('cors');
const routes = require('./routes');
const router = express.Router();
const {ApolloServer} = require('apollo-server-express');
// Handlebars helpers
const helpers = require('./utils/helpers');
// Handlebars template engine for front-end
const expressHandlebars = require('express-handlebars');
// Initialize handlebars for the html templates
const exphbs = expressHandlebars.create({helpers});
const {typeDefs, resolvers} = require('./schemas');
const {authMiddleware} = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

router.get('/', (req, res) => {
  res.render('template', {
    loggedIn: req.session.user !== undefined,
    body: '<h1>Welcome to the Full Service Boutique</h1>',
  });
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);
// Set handlebars as the template engine for the server
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.use('/', router);
// Enable CORS
app.use(cors());
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Create MongoDB
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/fullservicebotique', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// Logs mono queries
mongoose.set('debug', true);

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    })
  })
  };
  
  // Call the async function to start the server
  startApolloServer(typeDefs, resolvers);


// Use the routes
app.use('/', routes);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

