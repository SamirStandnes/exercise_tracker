const express = require('express');
const router = express.Router();
const db = require("../models/db");
const checkUsername = require('../helpers/checkUsername');

router.post('/api/exercise/new-user', checkUsername);

module.exports = router;