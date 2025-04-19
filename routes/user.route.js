const router = require('express').Router();

router.get('/profile', async (req, res, next) => {
    const person = req.user;
    res.render('profile', { person });
});

// router.get('/profile', async (req, res, next) => {
//     res.send('User Profile')
// });

module.exports = router;