import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetails from "./MovieDetails";
import { MemoryRouter } from "react-router-dom";

describe("MovieDetails", () => {
  it("should render correctly", () => {
    const movieData = {
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
      selectedMovieVideos: [
        {
          id: 243,
          movie_id: 337401,
          key: "KK8FHdFluOQ",
          site: "YouTube",
          type: "Trailer",
        },
        {
          id: 246,
          movie_id: 337401,
          key: "1UXZEGYSwgg",
          site: "YouTube",
          type: "Featurette",
        },
      ],
    };

    render(
      <MemoryRouter>
        <MovieDetails data={movieData} />
      </MemoryRouter>
    );

    expect(screen.getByText("Mulan 49%")).toBeInTheDocument();
    expect(screen.getByText("Release Date 2020-09-04")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
