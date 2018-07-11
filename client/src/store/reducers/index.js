import { combineReducers } from 'redux';
import authReducer from './authReducer';
import barReducer from './barReducer';

export default combineReducers({
  auth: authReducer,
  bars: barReducer
});
