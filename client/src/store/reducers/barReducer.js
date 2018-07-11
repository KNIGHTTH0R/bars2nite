import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedBars: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_BARS:
      return {
        ...state,
        searchedBars: action.payload
      };
    default:
      return state;
  }
}
