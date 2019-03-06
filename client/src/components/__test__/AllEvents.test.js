import React from 'react';
import { shallow, mount } from 'enzyme';
import Root from '../../Root';
import { AllEvents } from '../AllEvents';

describe('AllEvents', () => {
  const mockOnLoadUserReservedBars = jest.fn();
  const mockOnLoadReservedBars = jest.fn();

  const props = {
    onLoadUserReservedBars: mockOnLoadUserReservedBars,
    onLoadReservedBars: mockOnLoadReservedBars
  };

  let allEvents = shallow(<AllEvents {...props} />);
  it('renders properly', () => {
    expect(allEvents).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      allEvents = mount(<AllEvents {...props} />);
    });

    it('renders the page title', () => {
      expect(allEvents.find('.Event__heading').text()).toEqual('All Events');
    });

    it('dispatches the `onLoadUserReservedBars` and `onLoadReservedBars` it receives from props', () => {
      expect(mockOnLoadUserReservedBars).toHaveBeenCalled();
      expect(mockOnLoadReservedBars).toHaveBeenCalled();
    });
  });
});
