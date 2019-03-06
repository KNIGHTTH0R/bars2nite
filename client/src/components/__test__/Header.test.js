import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../Header';

describe('Header', () => {
  let header = shallow(<Header />);

  it('renders correctly', () => {
    expect(header).toMatchSnapshot();
  });

  describe('when user types in the search input', () => {
    const search_input = 'los angeles';

    it('updates the `searchInput` in the state', () => {
      header
        .find('.search__input')
        .simulate('change', { target: { value: search_input } });
      expect(header.state().searchInput).toEqual(search_input);
    });
  });

  describe('when user clicks the search button', () => {
    const mockOnSearchBar = jest.fn();
    const props = {
      onSearchBars: mockOnSearchBar,
      history: []
    };
    header = shallow(<Header {...props} />);

    beforeEach(() => {
      header.find('.fa.fa-search.search__icon').simulate('click');
    });

    it('clears the `searchInput` in the state', () => {
      expect(header.state().searchInput).toEqual('');
    });

    it('dispatches the `onSearchBar` it receives in props', () => {
      expect(mockOnSearchBar).toHaveBeenCalled();
    });
  });

  describe('when user clicks the nav button', () => {
    it('updates the `sideNavShow` in the state', () => {
      header.find('.navigation__list').simulate('click');

      expect(header.state().sideNavShow).toBe(true);
    });
  });
});
