
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
});

//GET all users
router.get('/users', (req, res)=>{
    userSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    //res.send('post - create user')
});

//GET one user
router.get('/users/:id', (req, res)=>{
    const {id} = req.params;
    userSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    //res.send('post - create user')
});

//Update one user
router.put('/users/:id', (req, res)=>{
    const {id} = req.params;
    const { name, age, email } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: {name, age, email}})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    //res.send('post - create user')
});

//Delete one user
router.delete('/users/:id', (req, res)=>{
    const {id} = req.params;
    userSchema
    .deleteOne({ _id: id})
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}))
    //res.send('post - create user')
});
module.exports = router;