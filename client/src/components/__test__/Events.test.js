import React from 'react';
import { shallow, mount } from 'enzyme';
import { Events } from '../Events';

describe('Events', () => {
  const mockOnLoadUserReservedBars = jest.fn();

  const props = {
    onLoadUserReservedBars: mockOnLoadUserReservedBars
  };

  let events = shallow(<Events {...props} />);

  it('renders properly', () => {
    expect(events).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      events = mount(<Events {...props} />);
    });

    it('renders the page title', () => {
      expect(events.find('.Event__heading').text()).toEqual('Your Events');
    });

    it('dispatches the `onLoadUserReservedBars` it receives from props', () => {
      expect(mockOnLoadUserReservedBars).toHaveBeenCalled();
    });
  });
});
