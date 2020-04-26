const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/auth');

router.post('/signup', signup);

// [validators]:
const {runValidation} = require('../validators/index');
const {userSignupValidator} = require('../validators/auth');

router.post('/signup',userSignupValidator,runValidation,signup);

module.exports = router;