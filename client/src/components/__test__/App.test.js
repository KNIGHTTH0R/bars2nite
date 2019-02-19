import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../../App';
import Root from '../../Root';
import Header from '../Header';
import Landing from '../Landing';
import SearchPage from '../SearchPage';

// import { fetchUser } from '../../store/actions';
// import * as actionTypes from '../../store/actions/actionTypes';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App />
    </Root>
  );
});

describe('App', () => {
  const app = shallow(
    <Root>
      <App />
    </Root>
  );

  it('renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  // it('contains a Landing component', () => {
  //   expect(wrapped.find(Landing).length).toEqual(1);
  //   wrapped.unmount();
  // });

  // it('contains a Header component', () => {
  //   expect(wrapped.find(Header).length).toEqual(1);
  //   wrapped.unmount();
  // });

  // it('contains a SearchPage component', () => {
  //   console.log(wrapped);
  //   expect(app.find('Connect(SearchPage)').exists()).toBe(true);
  //   wrapped.unmount();
  // });
});
