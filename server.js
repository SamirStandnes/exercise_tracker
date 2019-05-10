const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//var cookieParser = require('cookie-parser')

const test = require('./tests/test');
const hello = require('./tests/hello');
const post = require('./tests/post');
const newU = require('./middleware/newUser');
const updateExercise = require('./middleware/addExercise');

const getData = require('./tests/getData');

app.use(express.static('public'));
//app.use(cookieParser());
 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
  //console.log('Cookies: ', req.cookies);
  //console.log('Signed Cookies: ', req.signedCookies);
});

app.use(newU);  
app.use(updateExercise);

app.use(test);
app.use(hello);
app.use(post);
app.use(getData);

//app.use(update);


// Not found middleware
app.use((req, res, next) => {
  return next({status: 404, message: 'not found'})
})

// Error Handling middleware
app.use((err, req, res, next) => {
  let errCode, errMessage

  if (err.errors) {
    // mongoose validation error
    errCode = 400 // bad request
    const keys = Object.keys(err.errors)
    // report the first validation error
    errMessage = err.errors[keys[0]].message
  } else {
    // generic or custom error
    errCode = err.status || 500
    errMessage = err.message || 'Internal Server Error'
  }
  res.status(errCode).type('txt')
    .send(errMessage)
})

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('The magic is happening on port ' + listener.address().port + Date())
})