import barReducer from './barReducer';
import * as actionTypes from '../actions/actionTypes';

describe('barReducer', () => {
  const initialState = {
    searchedBars: null,
    reservedBars: null,
    userBars: null,
    loading: false,
    loginError: false
  };

  it('loads the searched bars', () => {
    const payload = { barName: '123' };

    expect(
      barReducer(initialState, {
        type: actionTypes.SEARCH_BARS,
        payload
      })
    ).toEqual({ ...initialState, searchedBars: payload });
  });

  it('loads the reserved bars', () => {
    const payload = { barName: '321' };
    expect(
      barReducer(initialState, {
        type: actionTypes.LOAD_RESERVED_BARS,
        payload
      })
    ).toEqual({ ...initialState, reservedBars: payload });
  });

  it('loads the reserved bars for users', () => {
    const payload = { barName: '12345' };

    expect(
      barReducer(initialState, {
        type: actionTypes.LOAD_USER_RESERVED_BARS,
        payload
      })
    ).toEqual({ ...initialState, userBars: payload });
  });

  it('starts the loading state', () => {
    expect(
      barReducer(initialState, { type: actionTypes.LOADING_STARTS })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

  it('changes the login error to true when theres an error', () => {
    expect(barReducer(initialState, { type: actionTypes.LOGIN_ERROR })).toEqual(
      { ...initialState, loginError: true }
    );
  });
});
