import auth from './controlers/auth';
import event from './controlers/event';
import types  from './controlers/types';
const express = require('express');
const passport = require('passport');

const passportService = require('./config/passport');

// Middleware to require login/auth
const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = function (app) {

// Initialize the router
const router = express.Router();
const authRoutes = express.Router();
const eventRoutes = express.Router();
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

 app.use('/api', router);

}
