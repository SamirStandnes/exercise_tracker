const express = require("express");
const router = express.Router();
const db = require("../models/db");
//const Regex = require("regex");



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

router.get('/api/exercise/log?', function(req, res) {
  console.log("GET data from userId");
  console.log(req.query.userId, typeof req.query.from);

///log?userId=X
  let userId = req.query.userId;
  let fromDate = (req.query.from === undefined? '1970-01-01' : req.query.from);
  let toDate = (req.query.to === undefined? '2100-01-01' : req.query.to);
  
  //console.log(typeof userId, userId);

  db.Log.find({ user_id: userId, date: { $gt: fromDate, $lt: toDate } } ).sort({date: 1}).limit(req.body.limit).exec(function(err, doc) {
      if (err) {
        console.log(err);
        throw err;
      }
     //console.log(typeof doc, doc);

     // doc[0]['exercise'][0].map(e  => console.log(e));

      console.log({
        username: doc[0].username,
        user_id: doc[0].user_id,
        count: doc.length(),
        log: [doc]
      });
      // Model.find always returns an Array simply, 
      // because find tries to search for all documents that match your search query!
    });


  
  //console.log(userId, fromDate, toDate, limit);

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
