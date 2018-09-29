const express = require('express');
const router = express.Router();

function getNear(req,res){
    res.status(200).send('test')
}

router.get('/', getNear);