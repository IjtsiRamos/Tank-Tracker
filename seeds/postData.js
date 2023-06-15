const { Post} = require('../models');

const postdata = [
  {
    name: 'Tank 1',
    posting_date: '2023-10-04',
    waterLevel: 15.6,
    user_id: 1,
  },
  {
    name: 'Tank 1',
    posting_date: '2023-10-05',
    waterLevel: 17.0,
    user_id: 1,
  },
  {
    name: 'Tank 1',
    posting_date: '2023-10-06',
    waterLevel: 18.0,
    user_id: 1,
  },
  {
    name: 'Tank 2',
    waterLevel: 30.0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 24.0,
    user_id: 2,
  },
  {
    name: 'Tank 2',
    waterLevel: 20.3,
    user_id: 2,
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;

