import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import MovieCard from "./MovieCard";
import { BrowserRouter } from "react-router-dom";
jest.mock("../utilities/apiCalls");
import { fakeMovieData } from "../../data/fakeMovieData";

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
      screen.getByText('Mulan 49%')
    ).toBeInTheDocument();
    expect(screen.getByText("Release Date 2020-09-04")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /337401 poster/i })
    ).toBeInTheDocument();
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

      userEvent.click(screen.getByRole("link", { name: /337401 poster/i }));
      expect(mockGetMovieDetails).toHaveBeenCalledWith(fakeMovie.id);
    });
});
