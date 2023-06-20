const { Post} = require('../models');

const postdata = [
  {
    name: 'Tank 2',
    waterLevel: 5,
    waterAvailable: 0,
    imgWater: 0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 3,
    waterAvailable: 0,
    imgWater: 0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 2,
    waterAvailable: 0,
    imgWater: 0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 2,
    waterAvailable: 0,
    imgWater: 0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 2,
    waterAvailable: 1,
    imgWater: 1,
    user_id: 2,
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;

