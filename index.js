const express = require('express'),
    app = express(),
    mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/local',{useMongoClient: true}, ()=>{
    console.log('CONNECTED TO DBS')
})

app.listen(4111, ()=>{
    console.log('LISTENING ON PORT');
})