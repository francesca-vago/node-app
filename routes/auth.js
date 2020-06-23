const router = require('express').Router();

// @route   GET
// @desc    Login User
// @access  Public
router.get('/', (req, res) => {
    res.send('Login');
})

module.exports = router;
