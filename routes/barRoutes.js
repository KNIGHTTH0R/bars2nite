const requiredLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Bar = mongoose.model('bars');

module.exports = app => {
  // @route   Get /api/bars
  // @desc    Load the list of all the bars with reservations
  // access   Public
  app.get('/api/bars', (req, res) => {
    Bar.find({}).then(bars => {
      res.send(bars);
    });
  });

  // @route   Get /api/user-bars
  // @desc    Load the list of all the bars reserved by the user
  // access   Private
  app.get('/api/user-bars', requiredLogin, (req, res) => {
    const _user = req.user.id;

    Bar.find({ guestlist: _user }).then(bars => {
      res.send(bars);
    });
  });

  // @route   Post api/reserve
  // @desc    Add a reservation
  // access   Private
  app.post('/api/reserve', requiredLogin, (req, res) => {
    const { name, yelpId, image, price, location, website } = req.body;
    const _user = req.user.id;

    Bar.findOne({
      yelpId
    }).then(bar => {
      // the bar instance already exists,
      if (bar) {
        if (bar.guestlist.includes(_user)) {
          // user has already rspved
          console.log("You have already RSVP'ed!");
          res.status(400).send({
            error: "You have already RSVP'ed!"
          });
        } else {
          // add the user to the list
          bar.guestlist.push(_user);
          bar.numberGoing++;

          try {
            bar.save();
            res.send('save success');
          } catch (err) {
            console.log(err);
            res.status(422).send(err);
          }
        }
      } else {
        // create a new instance of the bar and add the user to the list
        const newBar = new Bar({
          name,
          yelpId,
          image,
          price,
          location,
          website,
          guestlist: [_user]
        });

        try {
          newBar.save();
          res.send('save success');
        } catch (err) {
          console.log(err);
          res.status(422).send(err);
        }
      }
    });
  });

  // @route   Post api/reserve
  // @desc    Add a reservation
  // access   Private
  app.post('/api/cancel', (req, res) => {
    const { yelpId } = req.body;
    const _user = req.user.id;

    Bar.findOne({ yelpId, guestlist: _user }).then(bar => {
      if (bar) {
        const index = bar.guestlist.indexOf(_user);
        bar.guestlist.splice(index, 1);
        bar.numberGoing--;

        if (bar.guestlist.length === 0) {
          bar
            .remove()
            .then(() =>
              res.send('Bar removed from list because guestlist is empty.')
            );
        } else {
          try {
            bar.save();
            res.send('reservation canceled successfully');
          } catch (err) {
            console.log(err);
            res.status(422).send(err);
          }
        }
      } else {
        res.status(404).send({ error: 'bar not found' });
      }
    });
  });
};
