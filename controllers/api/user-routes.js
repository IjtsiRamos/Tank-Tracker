const router = require('express').Router();
const method =require( '../../utils/validate');
const {User} = require('../../models');

//To create a new user:
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id= dbUserData.id;
            req.session.username= dbUserData.username;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/login', async (req, res) => {
    try {

    res.render('login');
    } catch (err) {
    console.log(err);
    res.status(500).json(err);
    }
});

// When Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (!dbUserData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password. Please try again!' });
            return;
          }
      
        const validPassword = await method(req.body.password,dbUserData.password);
        
      
        if (!validPassword) {
            res
                .status(400)
                .json({ message: "Incorrect email or password. Please try again!" });
            return;
        }
        if(req.session.loggedIn){
            res
                .status(400)
                .json({ message: "Please log out first!" });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id= dbUserData.id;
            req.session.username= dbUserData.username;
       
            res
                .status(200)
                .json({ user: dbUserData, message: "You are now logged in! "});

        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// When Logout
router.post('/logout',async (req, res) => {
    try{
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            });
        } else {
            res.status(404).end();
        }
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;