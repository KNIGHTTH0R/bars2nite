const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

// ----------- db --------------
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

const app = express();

// ----------- cookie session --------------
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// ----------- passport --------------
app.use(passport.initialize());
app.use(passport.session());

// ----------- routes --------------
require('./routes/authRoutes')(app);

// ----------- port --------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on ' + PORT);
});
