// import router
const router = require('express').Router();
// import the routes
const userRoutes = require('./user-routes');
// these are where the api routes go
router.use('/users', userRoutes);

module.exports = router;
