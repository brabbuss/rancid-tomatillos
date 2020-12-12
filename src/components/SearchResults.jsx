import React from 'react';
import MovieCard from './MovieCard/MovieCard';


const SearchResults = (props) => {
  const { searchResults } = props

  return (
    <div className="card-deck">
      {!searchResults.length && <h2>Sorry no movies match that search. Please alter your search and try again.</h2>}
      {searchResults.map((searchResult) => (
        <MovieCard
          key={searchResult.id}
          data={searchResult}
          getMovieDetails={props.getMovieDetails}
          {...props}
        />
      ))}
    </div>
  );
}

export default SearchResults;