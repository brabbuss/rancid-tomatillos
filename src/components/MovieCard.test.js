import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MovieCard from "./MovieCard";
import { BrowserRouter } from "react-router-dom";
jest.mock("./utilities/apiCalls.js");
import fakeMovieData from "../data/fakeMovieData";

describe("MovieCard", () => {
  it("should render correctly", () => {
    const fakeMovie = fakeMovieData.movies[0];
    const mockGetMovieDetails = jest.fn();

    render(
      <BrowserRouter>
        <MovieCard
          key={fakeMovieData.id}
          data={fakeMovie}
          getMovieDetails={mockGetMovieDetails}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByRole("heading", { name: /money plane 67%/i })
    ).toBeInTheDocument();
    expect(screen.getByText("Release Date 2020-09-29")).toBeInTheDocument();
    expect(screen.getByAltText("")).toBeInTheDocument();
  }),
    it("should call get movie details with the correct params", () => {
      const mockGetMovieDetails = jest.fn();
      const fakeMovie = fakeMovieData.movies[0];

      render(
        <BrowserRouter>
          <MovieCard
            key={fakeMovie.id}
            data={fakeMovie}
            getMovieDetails={mockGetMovieDetails}
          />
        </BrowserRouter>
      );

      userEvent.click(screen.getByAltText(""));
      expect(mockGetMovieDetails).toHaveBeenCalledWith(fakeMovie.id);
    });
});
