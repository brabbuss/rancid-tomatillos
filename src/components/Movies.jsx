import axios from "axios";
import React, { Component } from "react";
import MovieCard from "./MovieCard";
import { Route } from "react-router-dom";
class Movies extends Component {
  constructor(props) {
    super(props);
  }

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
          <MovieCard key={movie.id} data={movie} onRoute={this.props.onRoute} />
        ))}
      </div>
    );
  }
}

export default Movies;
