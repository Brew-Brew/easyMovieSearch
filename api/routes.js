const express = require('express');

const theater = require('./theater/router');

const router = express.Router();

router.use('/getNear', theater);
module.exports = router;