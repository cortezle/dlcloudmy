var express = require('express');
var router = express.Router();
var auth = require("../controllers/AuthController.js");
var passport = require("passport");


// restrict index for logged in user only
router.get('/', auth.home);

// route to register page
router.get('/register', auth.register);

// route for register action
router.post('/register', auth.doRegister);

// route to login page
router.get('/login', auth.login);

// route for login action
router.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' }));

// route for logout action
router.get('/logout', auth.logout);

//rout for upload page
router.get('/upload',auth.upLoad);

//rout for superadmin page
router.get('/super',auth.adminSuper);

module.exports = router;
