import authReducer from './authReducer';
import { FETCH_USER } from '../actions/actionTypes';

describe('authReducer', () => {
  const userData = { user: 'test data' };

  it('fetches and sets the user data', () => {
    expect(authReducer({}, { type: FETCH_USER, payload: userData })).toEqual(
      userData
    );
  });
});
