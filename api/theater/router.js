const express = require('express');
const router = express.Router();

function getNear(req,res){
    console.log('make custom server');
}

router.get('/', getNear);