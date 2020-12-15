import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Banner from "./Banner";
import { fakeMovieData } from "../../data/fakeMovieData";
import { MemoryRouter } from "react-router-dom";

describe("Banner", () => {
  it("should render 3 slides", () => {
    render(
      <MemoryRouter>
        <Banner movies={fakeMovieData} />
      </MemoryRouter>
    );
    
    const slideOne = screen.queryByRole("link", { name: /first slide/i });
    const slideTwo = screen.queryByRole("link", { name: /second slide/i });
    const slideThree = screen.queryByRole("link", { name: /third slide/i });
    
    expect(slideOne).toBeInTheDocument();
    expect(slideTwo).toBeInTheDocument();
    expect(slideThree).toBeInTheDocument();
  })
})
