const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.post("/api/exercise/add", function(req, res, err) {
  console.log("POST to exercise");
  console.log(
    req.body.userId,
    req.body.description,
    req.body.duration,
    req.body.date
  );
  let exercise = { date: req.body.date, description: req.body.description, duration: req.body.duration };
  db.User.findOneAndUpdate(
    { user_id: req.body.userId },
    { $push: {exercise:exercise} },
    { new: true },
    function(err, doc) {
      if (err) {
        console.log("some error in updating");
        res.status(404);
      }
      res.status(201).json({ result: "Yes" });
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
