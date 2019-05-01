const db = require("../models/db");

const createUser = () => {
  return async function(req, res, next) {
    const userId = str => {
      return (
        str +
        Math.random()
          .toString(36)
          .substr(2, 6)
      );
    };

    let newUserId = await userId(req.body.username);

    console.log(newUserId);

    let newUser = new db.User({
      username: req.body.username,
      user_id: newUserId
    });

    newUser.save(function(err, doc) {
      if (err) {
        throw err;
      }
      res.json({
        username: req.body.username,
        user_id: newUserId
      });
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
