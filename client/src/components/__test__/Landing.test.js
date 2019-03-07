import React from 'react';
import { shallow, mount } from 'enzyme';
import { Landing } from '../Landing';

describe('Landing', () => {
  const mockOnLoadReservedBars = jest.fn();

  const props = {
    onLoadReservedBars: mockOnLoadReservedBars
  };

  let landing = shallow(<Landing {...props} />);

  it('renders correctly', () => {
    expect(landing).toMatchSnapshot();
  });

  it('has the correct title', () => {
    expect(landing.find('.header-box span').text()).toEqual('Bars2Nite');
  });

  it('contains the link to github', () => {
    expect(landing.find('.github-link').exists()).toBe(true);
  });

  it('dispatches the `onLoadReservedBars()` it receives in props', () => {
    expect(mockOnLoadReservedBars).toHaveBeenCalled();
  });
});
