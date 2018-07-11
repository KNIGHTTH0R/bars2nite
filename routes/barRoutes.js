const requiredLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Bar = mongoose.model('bars');

module.exports = app => {
  // @route   Post api/reserve
  // @desc    Add a reservation
  // access   Private
  app.post('/api/reserve', (req, res) => {
    const { name, yelpId } = req.body;
    const _user = req.user.id;

    console.log(name, yelpId, _user);

    Bar.findOne({ yelpId }).then(bar => {
      // the bar instance already exists,
      if (bar) {
        if (bar.gustlist.include(_user)) {
          // user has already rspved
        } else {
          // add the user to the list
          bar.gustlist.push(_user);
        }
      } else {
        // create a new instance of the bar and add the user to the list
        const bar = new Bar({
          name,
          yelpId,
          gustlist: [_user]
        });

        try {
          bar.save();
          res.send(bar);
        } catch (err) {
          console.log(err);
          res.status(422).send(err);
        }
      }
    });
  });
};
