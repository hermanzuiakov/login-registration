const express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    user = require('./models/user'),
    bcrypt = require('bcryptjs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*mongoose.connect('mongodb://localhost/local',{useMongoClient: true}, ()=>{
    console.log('CONNECTED TO DBS');
})*/

app.post('/register', (req, res)=>{
    const newUser = new user();

    newUser.email = req.body.email;
    newUser.password = req.body.password;

    bcrypt.genSalt(10, (err, salt)=>{
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if(err) return err;

            newUser.password = hash;

            newUser.save().then(userSaved=>{
                res.send('USER SAVED');
            }).catch(err=>{
                res.send('USER WAS NOT SAVED \n' + err);
            });
        })
    })
});


app.listen(4111, async()=>{

    await mongoose.connect("mongodb://127.0.0.1/login", () => {
        console.log("CONNECTED TO DBS");
    });

    console.log("listening on port 4111");

});