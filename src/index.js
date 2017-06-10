// Include our packages in our main server file
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');
const config = require('./config/main');
const cors = require('cors');
import router from './routes';
const port = 3000;

  let app = express();
  app.use("/uploads", express.static(path.resolve( './uploads')));
// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({extended:true, limit:'50mb', parameterLimit: 10000}));
app.use(bodyParser.json({limit: '50mb', parameterLimit: 10000}));
app.use(cors());

// Log requests to console
app.use(morgan('dev'));

// Home route. We'll end up changing this to our main front end index later.
app.get('/', function(req, res, next) {
res.send('Relax.');
});
mongoose.Promise = global.Promise;
// Connect to database
mongoose.connect(config.database);
router(app);

// Start the server
app.listen(port);
console.log('Your server is running on port ' + port + '.');
