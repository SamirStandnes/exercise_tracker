const db = require('../models/db');

const createUser = (str) => {
	console.log('creating new user, by the username of `${str}`');
	return async function (str) {

	const userId = (str) => {
		return str + Math.random().toString(36). substr(2,6);
	};
	
	let newUserId = await userId(str);

	console.log(newUserId);

        let newUser =  new db.User({
		 username: str,
		 user_id: newUserId
         }); 
         newUser.save();
	};	
};

/*
const createNewDoc = (str) => {
	return async function (str) {
		let number = await db.Ur
	};
};
*/

module.exports = createUser;