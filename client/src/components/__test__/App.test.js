import React from 'react';
import { mount } from 'enzyme';
import App from '../../App';
import Root from '../../Root';
import Header from '../Header';
import Landing from '../Landing';

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

it('shows header', () => {
  expect(wrapped.find(Header).length).toEqual(1);
  wrapped.unmount();
});

it('shows landing', () => {
  expect(wrapped.find(Landing).length).toEqual(1);
  wrapped.unmount();
});
