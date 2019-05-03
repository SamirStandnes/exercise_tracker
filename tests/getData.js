const express = require("express");
const router = express.Router();
const db = require("../models/db");
const Regex = require("regex");



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
  
  console.log(typeof userId);

  db.User.find({ user_id: userId }).exec(function(err, doc) {
      if (err) {
        console.log(err);
        throw err;
      }
     console.log(typeof doc, doc, doc[0].log, doc[0].username);

     // doc[0]['exercise'][0].map(e  => console.log(e));

      res.json(doc);
      // Model.find always returns an Array simply, 
      // because find tries to search for all documents that match your search query!
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
