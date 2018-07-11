import * as actionTypes from './actionTypes';
import axios from 'axios';

const yelpApiKey =
  'dbzN6G7_Yh1hIWyPFbQqnHTJqFfC8hzLyZbFzJ_i_0vq5GsugIIXKTQbTak62E8mF9wEd6f5rzYpG1Sh2CxyZUiIIF6FyhPubiFneD1IYZORweE6hjj0SxDgDVBFW3Yx';

export const onSearchBars = location => dispatch => {
  console.log(location);
  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=nightlife&location=${location}`,
      {
        headers: { Authorization: 'Bearer ' + yelpApiKey }
      }
    )
    .then(res => {
      dispatch({
        type: actionTypes.SEARCH_BARS,
        payload: res.data.businesses
      });
    });
};

export const onReserveBar = data => dispatch => {
  console.log(data);
  const barData = {
    name: data.name,
    yelpId: data.yelpId
  };

  axios
    .post('/api/reserve', barData)
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
