import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { getMovieDataAPI } from "./utilities/apiCalls";

class Movies extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    movies: [],
  };

  componentDidMount = async () => {
    const moviesData = await getMovieDataAPI()
    typeof moviesData === 'number' ? this.props.handleError(moviesData) : this.setState({ movies: moviesData });
  };

  render() {
    const { movies } = this.state;

    return (
      <div className="card-deck">
        {movies.map(movie => (
          <MovieCard
            key={movie.id}
            data={movie}
            getMovieDetails={this.props.getMovieDetails}
          />
        ))}
      </div>
    );
  }
}

export default Movies;
