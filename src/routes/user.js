
const express = require('express');
const router = express.Router();
const userSchema = require('../models/users_model')

//Get
router.get('/user', (req, res)=>{
    res.send('Wellcome to my API 2');
})

//Create user
router.post('/user', (req, res)=>{
    const newUser = userSchema(req.body);
    newUser.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    //res.send('post - create user')
})

module.exports = router;