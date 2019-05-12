const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.post("/api/exercise/add", function(req, res, err) {
  console.log("POST to exercise");
  console.log(
    req.body.userId,
    req.body.description,
    req.body.duration,
    req.body.date,
  );
  
  // let duration = Number(req.body.duration);
  // NB! Have to change it into a Date Object, and if Date not added in body provide current date
  

  db.User.findOne( { user_id: req.body.userId }, function(err, doc) {
      if (err) {
        console.log("some error in updating", err);
        res.status(404);
      }
      
      console.log(doc);
     let exercise = new db.Log({ username: doc.username, user_id: doc.user_id, date: req.body.date, description: req.body.description, duration: req.body.duration });
  
      exercise.save();
      res.status(201).send(`exercise added to user_id ${req.body.userId}`);
      console.log(doc);
    }
  );
  

  /*
    db.User.findOneAndDelete({username: 'test3'}, function (err, data) {
            //console.log(data);

        
            data.exercise.push(exercise);
            data.save(done);
            res.json({data});
        
    });
  */
});

module.exports = router;
