import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from './NavBar';
import {MemoryRouter, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("NavBar", () => {  
  it('Should render correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /tmdb/i })).toBeInTheDocument();
  }),

  it('should include link to home', () => {
    const history = createMemoryHistory()
    render(
      <Router history={history}>
        <NavBar />
      </Router>
    )
    userEvent.click(screen.queryByRole("link", { name: /home/i }));
    expect(history.location.pathname).toBe("/")
    userEvent.click(screen.queryByRole("link", { name: /tmdb/i }));
    expect(history.location.pathname).toBe("/")
  }),

  it('should accept what a user types in the search bar', () => {
    const mockSearchMovies = jest.fn()
    render(
    <MemoryRouter>
      <NavBar searchMovies={mockSearchMovies}/>
    </MemoryRouter>
      )
      userEvent.type(screen.getByPlaceholderText('Search by Title'), 'Mulan');
      userEvent.click(screen.getByText("Search"));
      expect(mockSearchMovies).toHaveBeenCalledWith('Mulan')
  })
})