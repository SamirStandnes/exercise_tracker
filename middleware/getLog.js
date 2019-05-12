const express = require("express");
const router = express.Router();
const db = require("../models/db");


router.get('/api/exercise/log?', function(req, res) {
  console.log("GET data from userId");
  //console.log(req.query.userId, typeof req.query.from);

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
     
     //let exercises = []; 
     //console.log(typeof doc, doc);
     //doc.map((e) => exercises.push(e));
      

      res.json({
        username: doc.username,
        user_id: doc.user_id,

      });
      console.log(exercises);


      // Model.find always returns an Array simply, 
      // because find tries to search for all documents that match your search query!
  });

 

});


module.exports = router;