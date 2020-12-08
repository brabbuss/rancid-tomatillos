import React from "react";
import MovieCard from "./MovieCard";
import Banner from './common/Banner'

const Movies = props => {
  const { movies } = props;

  return (
    <React.Fragment>
      <Banner />
      <main className="bg-dark">
        <div className="card-deck">
          {movies.map(movie => (
            <MovieCard
              key={movie.id}
              data={movie}
              getMovieDetails={props.getMovieDetails}
              {...props}
            />
          ))}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Movies;
