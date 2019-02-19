import React from 'react';
import { shallow } from 'enzyme';
import Root from '../../Root';
import AllEvents from '../AllEvents';

describe('AllEvents', () => {
  const allEvents = shallow(
    <Root>
      <AllEvents />
    </Root>
  );
  it('renders properly', () => {
    expect(allEvents).toMatchSnapshot();
  });

  it('renders the page title', () => {
    expect(allEvents.find('.Event__heading').text()).toEqual('All Events');
  });
});
