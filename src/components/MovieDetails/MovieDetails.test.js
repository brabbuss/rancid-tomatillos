import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieDetails from "./MovieDetails";
import {fakeMovieDetails, fakeMovieProps, fakeMovieDetails2, fakeMovieProps2} from '../../data/fakeMovieData'

describe("MovieDetails", () => {
  it("should render correctly", () => {
    render(
      <MovieDetails data={fakeMovieDetails} syncMovieID={jest.fn()} {...fakeMovieProps} />
    );

    const title = screen.getByText("Mulan")
    const releaseYear = screen.getByText("2020")
    const movieImage = screen.getByRole('heading', { name: /mulan/i })
    const progressbar = screen.getByRole('progressbar');
    
    expect(title).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
    expect(movieImage).toBeInTheDocument();
    expect(progressbar).toBeInTheDocument();
  });

  it('should render a tag line if there is one', () => {
    render(
      <MovieDetails data={fakeMovieDetails2} syncMovieID={jest.fn()} {...fakeMovieProps2} />
    )

    const tagline = screen.queryByText("When the hunter becomes the prey.")
    expect(tagline).toBeInTheDocument();
  })
});
