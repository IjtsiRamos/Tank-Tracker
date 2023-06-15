const router = require('express').Router();
const { Post} = require('../models');



// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.redirect('/api/user/login');
    }

    const loggedInUserId = req.session.user_id;
    const dbPostData = await Post.findAll({
      where: { user_id: loggedInUserId },
      limit: 6,
      order: [['createdAt', 'DESC']],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports=router