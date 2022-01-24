const withAuth = (req, res, next) => {
  // if they are not authorized then they will be redirected to the login page
  if (!req.session.loggedIn) {
    res.redirect('/login');
  } else {
    // call next if the user is authorized
    next();
  }
};

module.exports = withAuth;
