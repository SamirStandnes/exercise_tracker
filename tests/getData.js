const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get('/api/exercise/log?', function (req, res) {
    console.log('GET data from userId');
    console.log(req.query.userId);
    
    let userId = req.query.userId;
    let fromDate = (req.query.from === null ? null : Date(req.query.from));
    let toDate = Date(req.query.to);    
    let limit = Number(req.query.limit);
    
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