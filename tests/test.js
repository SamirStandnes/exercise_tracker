const express = require('express');
const router = express.Router();
const db = require("../models/db");

//const mongoose = require('mongoose');
//const mongo = require('mongodb');
//const Url = server.Url; remember! 'testing is not defined' error when importing same same at same same time :-)



router.get('/test3', function (req, res, next) {
  //console.log(req.params.number);
  db.User.findOne({ username: "test3"}, function (err, data) {
    if (data) {
      console.log();
      res.json({ username: data });
      //res.status(301).redirect('//'+data.original_url);
    }
  });
});

module.exports = router;