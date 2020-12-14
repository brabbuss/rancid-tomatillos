import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetails from "./MovieDetails";

describe("MovieDetails", () => {
  it("should render correctly", () => {
    const props = {
      match: {
        params: { movie_id: "337401" },
      },
    };

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
      <MovieDetails data={movieData} syncMovieID={jest.fn()} {...props} />
    );

    expect(screen.getByText("Mulan")).toBeInTheDocument();
    expect(screen.getByText("2020")).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it('should render a tag line if there is one', () => {
    const movieData =  {
        id: 718444,
        title: "Rogue",
        poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        release_date: "2020-08-20",
        overview: "Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa. But as the mission goes awry and the team is stranded, O’Hara’s squad must face a bloody, brutal encounter with a gang of rebels.",
        genres: [
            "Action"
        ],
        budget: 0,
        revenue: 0,
        runtime: 106,
        tagline: "When the hunter becomes the prey.",
        average_rating: 6.428571428571429,
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
        }]

    }
      const props = {
      match: {
        params: { movie_id: "718444" },
      }
    }
    render(
      <MovieDetails data={movieData} syncMovieID={jest.fn()} {...props} />
    )
    expect(
      screen.queryByText("When the hunter becomes the prey.")
    ).toBeInTheDocument();
  })

});
