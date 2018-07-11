const mongoose = require('mongoose');
const { Schema } = mongoose;

const barSchema = new Schema({
  name: String,
  yelpId: String,
  guestlist: [String],
  image: String,
  price: String,
  location: [String],
  website: String,
  numberGoing: {
    type: Number,
    default: 1
  }
});

mongoose.model('bars', barSchema);
