const express = require("express");
const router = express.Router();
const db = require("../models/db");

/*
const filterFunction = (done, userId, limit) => {
  db.User.find({ user_id: userId })
    .limit(limit)
    .exec(function(err, data) {
      if (err) {
        return done(err);
      }
      console.log(data);
      return done(null, data);
    });
};
*/

router.get("/api/exercise/log?", function(req, res) {
  console.log("GET data from userId");
  console.log(req.query.userId);

  let userId = String(req.query.userId);
  let fromDate = req.query.from;
  //(req.query.from === undefined ? null : Date(req.query.from));
  let toDate = req.query.to;
  let limit = req.query.limit;

  db.User.findOne({ user_id: userId }).exec(function(err, doc) {
      if (err) {
        throw err;
      }
      console.log(doc.exercise);
      //res.json({status: doc});
    });

  console.log(userId, fromDate, toDate, limit);

  // function to filter the log array based on query parameters
  //

  /*
    db.User.findOne({ user_id: req.query.userId }, function (err, doc) {
        if (err) {
            console.log("some error in updating");
            res.status(404);
          }
        console.log(doc);
     });
    */
});

module.exports = router;
