import axios from 'axios';
import * as actionTypes from './actionTypes';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/current_user')
    .then(res => dispatch({ type: actionTypes.FETCH_USER, payload: res.data }));
};
