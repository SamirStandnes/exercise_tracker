const db = require('../models/db');

const checkUsername = () => {
    return function (req, res, next) {
        console.log('using checkUser function');
        console.log(req.body.username);
      
        db.User.findOne({username: req.username}, function (err, data) {
            if(err) {
                throw err;
            }

            if(data != null) {
                console.log('this user exists');    
                res.send("Username is already taken");
            }
            
            else if (data === null) {
            console.log('the username does not exist, create new user')
            
            next();
        
            }
        });

    }
};

module.exports = checkUsername;