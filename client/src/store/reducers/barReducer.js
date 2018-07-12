import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedBars: null,
  reservedBars: null,
  userBars: null,
  loading: false,
  loginError: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_BARS:
      return {
        ...state,
        searchedBars: action.payload,
        loading: false,
        loginError: false
      };
    case actionTypes.LOAD_RESERVED_BARS:
      return {
        ...state,
        reservedBars: action.payload,
        loading: false,
        loginError: false
      };
    case actionTypes.LOAD_USER_RESERVED_BARS:
      return {
        ...state,
        userBars: action.payload,
        loading: false,
        loginError: false
      };
    case actionTypes.LOADING_STARTS:
      return {
        ...state,
        loading: true,
        loginError: false
      };
    case actionTypes.LOGIN_ERROR:
      return {
        ...state,
        loginError: true
      };
    default:
      return state;
  }
}
