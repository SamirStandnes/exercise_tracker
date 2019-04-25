
const db = require('../models/db');


const createUser = () => {
	console.log('creating new user, by the username of `${str}`');
	return async function (res, req, next) {

/* const userId = (str) => {
		return str + Math.random().toString(36). substr(2,6);
	};
	
	 let newUserId = await userId(str);
*/
	console.log(newUserId);

        let newUser =  new db.User({
		 username: req.body.username,
		 user_id: "newUserId"
		 }); 
		 
		 newUser.save(function(err, doc) {
			if(err) {
				throw err;
			}
				res.json({status: "sucess"});
			});
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