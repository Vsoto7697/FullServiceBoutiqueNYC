const express = require('express');
const Item = require('./models');

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

module.exports = router;