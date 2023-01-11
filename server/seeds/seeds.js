const itemSeeds = require('./itemSeed.json');
const db = require('../config/connection');
const {Item} = require('../models');

db.once('open', async () => {
  try {
    await Item.deleteMany({});
    await Item.create(itemSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});