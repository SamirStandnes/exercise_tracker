const express = require('express');
const router = express.Router();
const db = require("../models/db");
//const checkUsername = require('../helpers/checkUsername')();
//const createUser = require('../helpers/createUser');

router.post('/api/exercise/new-user', (req, res, next) => {
    console.log(req.body.username);
    /*
    db.User.findOne({username: req.body.username}, function (err, doc) {
        if(err) {
            throw err;
        }
        // User exist return a message 
        if(doc !== null) {
            console.log('this user exists');    
            res.send("Username is already taken");
        } 
        // User does not exist use fuction for new user creation
        else if (doc === null) {
           console.log('the username does not exist, create new user');
           let str = req.body.username.toString();
           createUser(req.body.username);
        
           db.User.findOne({username: req.body.username}, function (err, doc) {

            if(err) {
                throw err;
            }
            res.json({user_id: doc.user_id});

           });

        
           
        }
    });
    */

});


module.exports = router;