import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import {
  getMovieDataAPI,
  getMovieDetailsAPI,
  getMovieVideoAPI,
} from "../components/utilities/apiCalls";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { fakeMovieData } from "../data/fakeMovieData";
import userEvent from "@testing-library/user-event";

jest.mock("../components/utilities/apiCalls");

describe("App", () => {
  beforeEach(() => {

    getMovieVideoAPI.mockResolvedValue([
      {
        id: 243,
        movie_id: 337401,
        key: "KK8FHdFluOQ",
        site: "YouTube",
        type: "Trailer",
      },
    ]);

    getMovieDetailsAPI.mockResolvedValue({
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
    });
  });

  it("should render movie cards", async () => {
    getMovieDataAPI.mockResolvedValue(fakeMovieData.movies);

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const movieCard = await waitFor(() =>
      screen.getByRole("heading", { name: /mulan 49%/i })
    );
    expect(movieCard).toBeInTheDocument();
  });

  it("should show movie details when a poster is clicked", async () => {
    getMovieDataAPI.mockResolvedValue(fakeMovieData.movies);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    userEvent.click(
      await waitFor(() => screen.getByRole("link", { name: /337401 poster/i }))
    );
    await waitForElementToBeRemoved(() => screen.getByText("LOADING"));

    await waitFor(() =>
      expect(screen.queryByText("$200,000,000")).toBeInTheDocument()
    );
  }),

    it("should navigate back home from movie details", async () => {
      getMovieDataAPI.mockResolvedValue(fakeMovieData.movies);

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      userEvent.click(
        await waitFor(() =>
          screen.getByRole("link", { name: /337401 poster/i })
        )
      );
      await waitForElementToBeRemoved(() => screen.getByText("LOADING"));
      await waitFor(() => screen.queryByText("Budget: $200,000,000"));
      userEvent.click(
        await waitFor(() =>
          screen.getByRole("link", { name: /tmdb/i })
        )
      );
      await waitFor(() =>
        expect(screen.queryByText("Ava 51%")).toBeInTheDocument()
      );
    }),

    it('should search the movies data for input', async () => {
      getMovieDataAPI.mockResolvedValue(fakeMovieData.movies);
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
       userEvent.type(screen.getByPlaceholderText("Search by Title"), "Mulan");
       userEvent.click( await waitFor(() => 
       screen.getByText("Search")))
       await waitFor(() =>
       expect(screen.getByText('Mulan 49%')).toBeInTheDocument()
       )
    }),

    it('should render an error message', async () => {
      getMovieDataAPI.mockResolvedValue(404)

      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
      
      await waitForElementToBeRemoved(() => screen.getByRole('button', { name: /next/i }))
        screen.debug()
      await waitFor(() => 
      expect(screen.queryByText('Error Code: 404')).toBeInTheDocument())
    })
});
