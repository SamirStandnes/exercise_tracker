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
     //console.log(typeof doc, doc, doc.length);
     //doc.map((e) => exercises.push(e));
     
     //let date = new Date(e.date).toString().split(' ').splice(0,4).join(' ');  
      if (doc.length === 0) {
        res.send('empty result set');

      }
      else {
      
      res.json({
        username: doc[0].username,
        user_id: doc[0].user_id,
        count: doc.length,
        log: doc.map((e) => new Object({description: e.description, duration : e.duration, date: new Date(e.date).toString().split(' ').splice(0,4).join(' ')}))
      });  
      
      }

      
      //console.log(exercises);
      

      // Model.find always returns an Array simply, 
      // because find tries to search for all documents that match your search query!
  });

 

});


module.exports = router;