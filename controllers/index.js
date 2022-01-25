// import router
const router= require('express').Router();
// import the routes that I created
const apiRoutes= require('./api');
const homeRoutes= require('./home-routes.js');
const dashboardRoutes= require('./dashboard-routes.js')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
