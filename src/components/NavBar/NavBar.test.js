import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from './NavBar';
import {MemoryRouter, NavLink, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("NavBar", () => {  
  it('Should render correctly', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    expect(screen.queryByText('Home')).toBeInTheDocument();
    expect(screen.queryByRole("link", { name: /rancid tomatillos/i })).toBeInTheDocument();
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
    userEvent.click(screen.queryByRole("link", { name: /rancid tomatillos/i }));
    expect(history.location.pathname).toBe("/")
  }),

  it('should accept what a user types in the search bar', () => {
    const mockSearchMovies = jest.fn()
      // {
      //   id: 337401,
      //   title: "Mulan",
      //   poster_path:
      //     "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      //   backdrop_path:
      //     "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      //   release_date: "2020-09-04",
      //   overview:
      //     "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
      //   genres: ["Action", "Adventure", "Drama", "Fantasy"],
      //   budget: 200000000,
      //   revenue: 57000000,
      //   runtime: 115,
      //   tagline: "",
      //   average_rating: 4.909090909090909,
      // },
    // ];
    render(
    <MemoryRouter>
      <NavBar searchMovies={mockSearchMovies}/>
    </MemoryRouter>
      )
      userEvent.type(screen.getByPlaceholderText('Search by Title'), {target: {value: 'Mulan'}});
      const searchMovies = userEvent.click(screen.getByText("Search"))
      screen.debug()
      expect(searchMovies).toHaveBeenCalledWith('Mulan')
  })


})