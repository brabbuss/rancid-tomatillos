import React from "react";
import SearchResults from "./SearchResults";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {mockSearchResults} from '../../data/fakeMovieData'

describe("SearchResults", () => {
  
  it('should display filtered results', () =>{
    
    const mockProps = []
    render(
      <MemoryRouter>

      <SearchResults
      searchResults={mockSearchResults}
      getMovieDetails={jest.fn()}
      {...mockProps}
      />
      </MemoryRouter>
    )
    expect(screen.queryByText("My Hero Academia: Heroes Rising")).toBeInTheDocument();
    expect(screen.queryByText("Release Date 2020-09-04"))
  })

  it('should return a message if no movies match the search', () => {
    const mockSearchResults = []
    const mockProps = []
    render(
      <MemoryRouter>
        <SearchResults 
        searchResults={mockSearchResults}
        getMovieDetails={jest.fn()}
        {...mockProps}
        />
      </MemoryRouter>
    )

    expect(
      screen.queryByText(
        "Sorry no movies match that search. Please alter your search and try again.")).toBeInTheDocument();
  })
})