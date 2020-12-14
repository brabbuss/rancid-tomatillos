import React from "react";
import SearchResults from "./SearchResults";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("SearchResults", () => {
  
  it('should display filtered results', () =>{
    const mockSearchResults = [
      {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      },
      {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 4.909090909090909,
        "release_date": "2020-09-04"
      },{
        "id": 592350,
        "poster_path": "https://image.tmdb.org/t/p/original//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//9guoVF7zayiiUq5ulKQpt375VIy.jpg",
        "title": "My Hero Academia: Heroes Rising",
        "average_rating": 5,
        "release_date": "2019-12-20"
      }
    ]
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
    expect(screen.queryByText("My Hero Academia: Heroes Rising 50%")).toBeInTheDocument();
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