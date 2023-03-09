import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from './SearchBar';

const categories = ['한식', '중식', '일식'];
const setFilterText = jest.fn();
const setFilterCategory = jest.fn();

describe('SearchBar', () => {
  it('user clicks button', () => {
    render(
      <SearchBar
        categories={categories}
        filterText=""
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />,
    );

    fireEvent.click(screen.getByText('한식'));
    expect(setFilterCategory).toBeCalled();
  });
});