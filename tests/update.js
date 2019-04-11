const express = require('express');
const router = express.Router();
const db = require("../models/db");

router.get('/update', function (req, res, err) {
    
    let exercise = {date: "test date", description: "description test"};
  
    

    db.User.findOneAndUpdate({username: 'test3'}, {$set:{username:"Naomi"}}, {new: true},  function (err, data) {
            if(err) {
            console.log('some error in updateing');
        }

        res.json({result: 'Yes'});
    });

    
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