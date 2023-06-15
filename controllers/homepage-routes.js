const router = require('express').Router();
const { Post} = require('../models');



// GET all galleries for homepage
  router.get('/', async (req, res) => {
    try {
      const loggedInUserId = req.session.user_id; // Assuming you have the logged-in user's ID stored in req.session.userId
      const dbPostData = await Post.findAll({
        where: { user_id: loggedInUserId }
      });

      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        // loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });  



module.exports=router