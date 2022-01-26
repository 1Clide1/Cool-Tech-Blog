// import router
const router = require("express").Router();
// import the routes
const userRoutes = require("./user-routes");
const commentRoutes = require("./comments-routes");
const blogPostRoutes = require("./blogpost-routes");
// these are where the api routes go
router.use("/users", userRoutes);
router.use("/blogpost", blogPostRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
