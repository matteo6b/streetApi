// Include our packages in our main server file
const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config/main');
const cors = require('cors');
import router from './routes';
const port = 3000;

  let app = express();
// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Log requests to console
app.use(morgan('dev'));

// Home route. We'll end up changing this to our main front end index later.
app.get('/*', function(req, res, next) {
  res.setHeader('Last-Modified', (new Date()).toUTCString());
 next();
});
mongoose.Promise = global.Promise;
// Connect to database
mongoose.connect(config.database);

router(app);
app.use(express.static(__dirname + '/static'));
// Start the server
app.listen(port);
console.log('Your server is running on port ' + port + '.');
