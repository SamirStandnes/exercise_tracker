const db = require('../models/db');
const createUser = require('./createUser');

const checkUsername = () => {
    console.log("running checkUsername");

    return function (req, res, next) {
        console.log('using checkUser function');
        console.log(req.body.username);
      
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
                createUser(req.body.username);
                
               db.User.findOne({username: req.body.username}, function (err, doc) {

                if(err) {
                    throw err;
                }

                res.json({user_id: doc.user_id});

               });
            }
        });
    }
};

module.exports = checkUsername;