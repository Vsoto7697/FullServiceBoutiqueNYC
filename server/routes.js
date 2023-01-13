const express = require('express');
const Item = require('./models');
const app = express();
const router = express.Router();

router.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

router.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

router.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, (err, user) => {
    if (err) {
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    if (user.password !== password) {
      return res.status(401).send();
    }
    // User has been authenticated
  });
});


app.get('/', (req, res) => {
  res.render('index', { title: 'My App', message: 'Welcome to my app!' });
});

module.exports = router;