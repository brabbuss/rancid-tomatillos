import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Movies from "./Movies";
import { getMovieDataAPI, getMovieDetailsAPI } from "../utilities/apiCalls";
import fakeMovieData from "../../data/fakeMovieData";
jest.mock("./utilities/apiCalls");
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { getMovieDetails } from '../../App'

describe("Movies", () => {
  it("should render movie cards", async () => {
    getMovieDataAPI.mockResolvedValueOnce(fakeMovieData.movies);
    render(
      <MemoryRouter>
        <Movies getMovieDetails={jest.fn()} />
      </MemoryRouter>
    );

    const movieCard = await waitFor(() =>
      screen.getByRole("heading", { name: /mulan 49%/i })
    );
    expect(movieCard).toBeInTheDocument();
  });

  it("should show movie details when a poster is clicked", async () => {
    getMovieDataAPI.mockResolvedValueOnce(fakeMovieData.movies);
    getMovieDetailsAPI.mockResolvedValueOnce({
      id: 337401,
      title: "Mulan",
      poster_path:
        "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
      backdrop_path:
        "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
      release_date: "2020-09-04",
      overview:
        "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
      genres: ["Action", "Adventure", "Drama", "Fantasy"],
      budget: 200000000,
      revenue: 57000000,
      runtime: 115,
      tagline: "",
      average_rating: 4.909090909090909,
    })

    render(
      <MemoryRouter>
        <Movies getMovieDetails={getMovieDetails} />
      </MemoryRouter>
    );
    
    userEvent.click( await waitFor(() => screen.getByRole('link', {name: /337401 poster/i })))
    expect(screen.getByText(200000000));
    
  });
});
