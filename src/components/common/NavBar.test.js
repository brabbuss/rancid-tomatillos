import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import NavBar from './NavBar';
import {BrowserRouter, NavLink, Router} from 'react-router-dom';
import {createMemoryHistory} from 'history'

describe("NavBar", () => {  
  it('Should render correctly', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
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
  })
})