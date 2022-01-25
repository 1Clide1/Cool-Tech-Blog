// importing the npm dependencies to the server
const express = require('express');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// getting the path from node also importing the routes, helpers, etc
const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    // this is mainly for heroku I have my env secret and then if that doesn't work it will use the hard coded secret
    secret: process.env.SECRET || "Supadupaveryhardsecret",
    cookie: { },
    store: new SequelizeStore({ db: sequelize }),
    resave: false,
    saveUninitialized: true
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening, localhost:${PORT}`));
});