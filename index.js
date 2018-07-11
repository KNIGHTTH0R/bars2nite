const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./models/Bar');
require('./services/passport');

// ----------- db --------------
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error));

const app = express();

app.use(bodyParser.json());

// ----------- cookie session --------------
app.use(
  cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

// ----------- passport --------------
app.use(passport.initialize());
app.use(passport.session());

// ----------- routes --------------
require('./routes/authRoutes')(app);
require('./routes/barRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on ' + PORT);
});
