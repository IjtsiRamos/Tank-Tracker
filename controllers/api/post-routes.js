const router = require('express').Router();
const { Post, User} = require('../../models');
const nodemailer = require('nodemailer');


router.get('/waterLevel', async (req, res) => {
  try {
    const loggedInUserId = req.session.user_id;
    const dbPostData = await Post.findAll({
      where: { user_id: loggedInUserId },
      limit: 24,
      order: [['createdAt', 'DESC']],
    })
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
      waterAvailable: req.body.waterAvailable,
      user_id: req.body.user_id,
      imgWater: req.body.waterAvailable !== null ? req.body.waterAvailable : 1,
    });

    
    if (newPost.waterAvailable === 0) {

      const dbUserData = await User.findOne({
        where: {
            id: newPost.user_id,
        },
    });


      if (!dbUserData.email) {
        return res.status(400).send(dbUserData);
      }
      
      const emailRecipient= dbUserData.email;

    // Check if the email recipient is empty
      if (emailRecipient.trim() === '') {
        return res.status(400).send('Email is empty');
      }
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.E_USER,
          pass: process.env.E_PASSWORD,
        },
      });
    
      // Configure the email message
      const mailOptions = {
        from: process.env.E_USER,
        to: emailRecipient,
        subject: 'Tank Tracker Data',
        text: 'Dear Tank Tracker User, \n There is no water available to fill in your tanks, please contact your water provider.',
      };
    
      // Send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          res.status(500).send('Error sending email');
        } else {
          console.log('Email sent: ' + info.response);
          res.status(200).send('Email sent successfully');
          res.redirect('/');
        }
      });
    }

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;