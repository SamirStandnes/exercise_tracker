const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get('/api/exercise/log?userId', function (req, res, err) {
    console.log('GET data from userId');

    db.User.findOne({ user_id: req.query.userId }, function (err, doc) {
        if (err) {
            console.log("some error in updating");
            res.status(404);
          }
          console.log(doc);
     });

});

module.exports = router;