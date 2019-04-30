const db = require('../models/db');

const createUser = (str) => {
	console.log('creating new user, by the username of `${str}`');
	return function (str) {
        let newUser =  new db.User({
         	username: str
         }); 
        newUser.save();
	};	
};

module.exports = createUser;