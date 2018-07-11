import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedBars: null,
  reservedBars: null,
  userBars: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_BARS:
      return {
        ...state,
        searchedBars: action.payload
      };
    case actionTypes.LOAD_RESERVED_BARS:
      return {
        ...state,
        reservedBars: action.payload
      };
    case actionTypes.LOAD_USER_RESERVED_BARS:
      return {
        ...state,
        userBars: action.payload
      };
    default:
      return state;
  }
}
