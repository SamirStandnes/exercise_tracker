const db = require('../models/db');
const createUser = require('./createUser')();

const checkUsername = () => {
    return function (req, res, next) {
        console.log('using checkUser function');
        console.log(req.body.username);
      
        db.User.findOne({username: req.body.username}, function (err, doc) {
            if(err) {
                throw err;
            }

            if(doc !== null) {
                console.log('this user exists');    
                res.send("Username is already taken");
            } 
            // Fuction for new user creation
            else if (doc === null) {
               console.log('the username does not exist, create new user');
                createUser(req.body.username);
                res.json({status: "success"}); 
            }
        });
    }
};

module.exports = checkUsername;