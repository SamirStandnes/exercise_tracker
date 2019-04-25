const express = require('express');
const router = express.Router();
const db = require("../models/db");
const checkUsername = require('../helpers/checkUsername');
const createUser = require('../helpers/createUser');

router.post('/api/exercise/new-user', checkUsername, createUser);

module.exports = router;