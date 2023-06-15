const router = require('express').Router();
const { Post} = require('../../models');


router.get('/waterLevel', async (req, res) => {
  try {
    const loggedInUserId = req.session.user_id;
    const dbPostData = await Post.findAll({
      where: { user_id: loggedInUserId }
    });
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.post('/add', async (req, res) => {
  try {
    const newPost = await Post.create({
      name: req.body.name,
      waterLevel: req.body.waterLevel,
      posting_date: req.body.date,
      user_id: req.body.user_id,
    });
     res.status(200).json(newPost);

  } catch (err) {
    res.status(400).json(err);
  }
});



module.exports = router;