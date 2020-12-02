import React, { Component } from "react";
import fakeMovieData from "../data/fakeMovieData";
import MovieCard from "./MovieCard";

class Movies extends Component {
  state = {
    movies: fakeMovieData.movies,
  };

  componentDidMount() {
    console.log(this.state.movies);
  }

  render() {
    const { movies } = this.state;

    return (
      <div style={{flexWrap: "wrap"}} className="card-deck">
        {movies.map(movie => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    );
  }
}

export default Movies;
