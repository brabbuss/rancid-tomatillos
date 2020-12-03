import axios from "axios";
import React, { Component } from "react";
import MovieCard from "./MovieCard";
class Movies extends Component {

  state = {
    movies: [],
  };

  async componentDidMount() {
    const { data: moviesData } = await axios.get(
      "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
    );
    this.setState({
      movies: moviesData.movies,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="card-deck">
        {movies.map(movie => (
          <MovieCard key={movie.id} data={movie} getMovieDetails={this.props.getMovieDetails} />
        ))}
      </div>
    );
  }
}

export default Movies;
