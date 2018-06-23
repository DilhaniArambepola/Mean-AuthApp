const express = require('express');
const router = express.Router();

//Register
router.post('/register', (req, res, next)=>{
    res.send('Register');
});

//Authenticate
router.post('/authenticate', (req, res, next)=>{
    res.send('authenticate');
});

//register
router.get('/Profile', (req, res, next)=>{
    res.send('profile');
});

module.exports = router;