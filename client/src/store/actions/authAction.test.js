import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_USER } from './actionTypes';
import { fetchUser } from './authAction';

const createMockStore = configureStore([thunk]);
const store = createMockStore({ auth: {} });

it('creates an action to fetch user', () => {
  const expectedAction = [{ type: FETCH_USER, user: 'test' }];

  //   return store.dispatch(fetchUser()).then(() => {
  //     expect(store.getActions()).toEqual(expectedAction);
  //   });

  //   store.dispatch(fetchUser()).then(() => {
  //     const actions = store.getActions();

  //     expect(actions[0]).toEqual(expectedAction);
  //   });
});
