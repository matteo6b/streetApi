import auth from './controlers/auth';
import event from './controlers/event';
import types  from './controlers/types';
import image  from './controlers/image';
const express = require('express');
const passport = require('passport');
const passportService = require('./config/passport');
const multer = require('multer');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {

// Initialize the router
const router = express.Router();
const authRoutes = express.Router();
const eventRoutes = express.Router();
const imageRoutes = express.Router();
const typesRoutes = express.Router();
//= ========================
// Auth Routes
//= ========================

// Set auth routes as subgroup/middleware to apiRoutes
router.use('/auth', authRoutes);

// Registration route
authRoutes.post('/register', auth.register);

// Login route
authRoutes.post('/login', requireLogin, auth.login);

//=========================
// Type Routes
//=========================

// Set auth routes as subgroup/middleware to apiRoutes

// Set url for API group routes

router.use('/type', typesRoutes);
typesRoutes.get('/all',types.all);
typesRoutes.post('/add',types.add);
typesRoutes.get('/:id',types.findOne);
typesRoutes.put('/:id/update',types.update);
typesRoutes.delete('/:id/delete',types.delete);

//=========================
// Event Routes
//=========================

// Set auth routes as subgroup/middleware to apiRoutes

// Set url for API group routes

router.use('/event', eventRoutes);
eventRoutes.get('/all',event.all);
eventRoutes.post('/add',event.add);
eventRoutes.get('/:id',event.findOne);
eventRoutes.put('/:id/update',event.update);
eventRoutes.delete('/:id/delete',event.delete);

router.use('/image', imageRoutes);

// To get more info about 'multer'.. you can go through https://www.npmjs.com/package/multer..
var storage = multer.diskStorage({
destination: function(req, file, cb) {
cb(null, 'uploads/')
},
filename: function(req, file, cb) {
cb(null, file.originalname);
}
});

var upload = multer({
storage: storage
});

imageRoutes.post('/add', upload.single('filename'), function(req, res, next) {

res.send(req.file);
    console.log(req.file)
/*req.files has the information regarding the file you are uploading...
from the total information, i am just using the path and the imageName to store in the mongo collection(table)
*/
var path = req.file.path;
var imageName = req.file.originalname;

var imagepath = {};
imagepath['path'] = path;
imagepath['originalname'] = imageName;

//imagepath contains two objects, path and the imageName

//we are passing two objects in the addImage method.. which is defined above..
image.add(imagepath, function(err) {

});

});



 app.use('/api', router);

}
