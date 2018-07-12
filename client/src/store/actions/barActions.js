import * as actionTypes from './actionTypes';
import axios from 'axios';

const yelpApiKey =
  'dbzN6G7_Yh1hIWyPFbQqnHTJqFfC8hzLyZbFzJ_i_0vq5GsugIIXKTQbTak62E8mF9wEd6f5rzYpG1Sh2CxyZUiIIF6FyhPubiFneD1IYZORweE6hjj0SxDgDVBFW3Yx';

export const onSearchBars = location => dispatch => {
  dispatch({
    type: actionTypes.LOADING_STARTS
  });

  axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=nightlife&limit=21&location=${location}`,
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

export const onLoadReservedBars = () => dispatch => {
  dispatch({
    type: actionTypes.LOADING_STARTS
  });

  axios
    .get('/api/bars')
    .then(res =>
      dispatch({
        type: actionTypes.LOAD_RESERVED_BARS,
        payload: res.data
      })
    )
    .catch(e => console.log(e));
};

export const onLoadUserReservedBars = () => dispatch => {
  dispatch({
    type: actionTypes.LOADING_STARTS
  });

  axios.get('/api/user-bars').then(res =>
    dispatch({
      type: actionTypes.LOAD_USER_RESERVED_BARS,
      payload: res.data
    })
  );
};

export const onReserveBar = data => dispatch => {
  const barData = {
    name: data.name,
    yelpId: data.yelpId,
    image: data.img,
    price: data.price,
    location: data.location,
    website: data.website
  };

  axios
    .post('/api/reserve', barData)
    .then(res => {
      dispatch(onLoadUserReservedBars());
    })
    .catch(err => console.log(err));
};

export const onCancelReservation = data => dispatch => {
  const barData = {
    yelpId: data.yelpId
  };

  axios
    .post('/api/cancel', barData)
    .then(res => {
      dispatch(onLoadUserReservedBars());
      dispatch(onLoadReservedBars());
    })
    .catch(e => console.log(e));
};

export const onLoginError = () => dispatch => {
  dispatch({ type: actionTypes.LOGIN_ERROR });
};
