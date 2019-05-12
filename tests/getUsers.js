const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get('/api/exercise/users', function(req, res) {
  console.log("GET users");

  //console.log(typeof userId, userId);

   db.User.find({}).exec(function(err, doc) {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log(typeof doc, doc);

     // doc[0]['exercise'][0].map(e  => console.log(e));

      res.json(doc);
      // Model.find always returns an Array simply, 
      // because find tries to search for all documents that match your search query!
    });

});

module.exports = router;