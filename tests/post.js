const express = require('express');
const router = express.Router();
const db = require("../models/db");
const mongoose = require('mongoose');


let newUser =  new db.User({ 
    username: "test3",
    exercise: {
        date: "test3 date",
        description: "Test3 descriptions",
    }
  });

  router.get('/newuser', function (req, res, next) {
    newUser.save(function(err, data) {
        if(err) {
            throw err;
        }
            res.json({status: "success"});
        });
  });


module.exports = router;