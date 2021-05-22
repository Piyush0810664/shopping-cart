const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');




router.get('/fakeUser', async (req, res) => {
    const user = new User({ email: 'piyush@gmail.com', username: "piyush" });
    // 3 parametre lega name,password aur callback documentation me dekhna hai....
    const newUser = await User.register(user, 'piyush12');
    res.send(newUser);

})

router.get('/register', async (req, res) => {
    res.render('auth/signup');
})

router.post('/register', async (req, res) => {

    try {

        const user = new User({ username: req.body.username, email: req.body.email });

        const newuser = await User.register(user, req.body.password);

        req.flash('success', 'Registered Successfully')
        res.redirect('/products');
    }
    catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }

})


router.get('/login', async (req, res) => {
    res.render('auth/login');
})

router.post('/login',
    passport.authenticate('local',
        {
            failureRedirect: '/login',
            failureFlash: true
        }),
    (req, res) => {
        req.flash('success', 'Welcome Back!!!')
        //console.log(req.user)
        // user ki sari information padi hogi req.user me
        res.redirect('/products')
    })

router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success', 'Logged Out')
    res.redirect('/login');
})


module.exports = router;