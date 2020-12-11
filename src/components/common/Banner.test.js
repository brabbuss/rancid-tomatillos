import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Banner from "./Banner";
import { fakeMovieData } from "../../data/fakeMovieData";
import { BrowserRouter } from "react-router-dom";

describe("Banner", () => {
  it("should render 3 slides", () => {
    const movies = fakeMovieData;
    render(
      <BrowserRouter>
        <Banner movies={movies} />
      </BrowserRouter>
    );
    const slideThree = screen.queryByRole("link", { name: /third slide/i });
    expect(slideThree).toBeInTheDocument();
    const slideTwo = screen.queryByRole("link", { name: /second slide/i });
    expect(slideTwo).toBeInTheDocument();
    const slideOne = screen.queryByRole("link", { name: /first slide/i });
    expect(slideOne).toBeInTheDocument();
  })
})
