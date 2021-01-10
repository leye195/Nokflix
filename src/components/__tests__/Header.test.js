import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../Header/Header';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
    location: {
      pathname: ''
    }
  }),
}));

describe('<Header/>', () => {

  it('render OK', () => {
    render(<MemoryRouter><Header/></MemoryRouter>);
  });

  it('should render link correctly ', () => {
    const {getByText} = render(<MemoryRouter><Header/></MemoryRouter>);
    const home = getByText('Nokflix');
    const movie = getByText('Movie');
    const tv = getByText('TV');
    const search = getByText('Search');

    expect(home.getAttribute('href')).toBe("/");
    expect(movie.getAttribute('href')).toBe('/movie');
    expect(tv.getAttribute('href')).toBe('/tv');
    expect(search.getAttribute('href')).toBe('/search');
  })
});
