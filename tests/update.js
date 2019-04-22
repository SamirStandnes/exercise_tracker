const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.post('/api/exercise/add', function (req, res, err) {
    console.log("POST to exercise");
    //let exercise = {date: "test date", description: "description test"};
    console.log(req.body.userId, req.body.description);
    /*
   db.User.findOneAndUpdate({username: 'test3'}, {$push:{exercise:exercise}}, {new: true},  function (err, doc) {
            if(err) {
            console.log('some error in updating');
        }

        res.json({result: 'Yes'});

    });

    */
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