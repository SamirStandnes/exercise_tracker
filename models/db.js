require("dotenv").config();
// mongodb and mongoose
const mongo = require("mongodb");
const mongoose = require("mongoose");

//connect to db
const mongoURL = process.env.MONGOLAB_URI;
mongoose.connect(mongoURL, { useNewUrlParser: true });
console.log(
  "just to confirm, here is my mongoURL  ***" + "hidden Mongo db url" + "***"
);

// mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' )

//define db model
const Schema = mongoose.Schema;
/*
const exercise_data = new Schema ({   
    date: Date,
    descrtiption: String,
    duration: Number,
});
*/
//const log = { date: String, description: String, duration: Number };

const newUser = new Schema({
  username: String,
  user_id: String,
});

const newExercise = new Schema ({
  username: String,
  user_id: String,
	date: String,
	description: String,
	duration: Number
});


// init db model
const User = mongoose.model("User", newUser);

const Log = mongoose.model('newExercise', newExercise);

//export db models
module.exports.User = User;

module.exports.Log = Log;
