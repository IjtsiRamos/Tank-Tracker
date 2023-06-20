const router = require('express').Router();
const { Post} = require('../../models');
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
     res.status(200).json(newPost);
    req.session.save(() => {
      req.session.waterAvailable = newPost.waterAvailable;
  });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/alerta', (req, res) => {

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'process.env.E_USER',
      pass: 'process.env.E_PASSWORD',
    },
  });

  // Configure the email message
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: req.session.email,
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
});



module.exports = router;