const express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/local',{useMongoClient: true}, ()=>{
    console.log('CONNECTED TO DBS');
})

app.post('/register', (req, res)=>{
    const newUser = new user();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    res.send(newUser);
});


app.listen(4111, ()=>{
    console.log('LISTENING ON PORT');
})