import React, { Component } from "react";
import "./App.css";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getMovieDataAPI,
  getMovieDetailsAPI,
} from "./components/utilities/apiCalls";
import ErrorPage from "./components/errorPages/ErrorPage";

class App extends Component {
  state = {
    selectedMovie: {},
    selectedMovieVideo: "",
    movies: [],
    statusError: false,
    statusErrorCode: "",
  };

  componentDidMount = async () => {
    const moviesData = await getMovieDataAPI();
    typeof moviesData === "number"
      ? this.handleError(moviesData)
      : this.setState({ statusError: false, movies: moviesData });
  };

  getMovieDetails = async id => {
    const movieDetails = await getMovieDetailsAPI(id);
    typeof movieDetails === "number"
    ? this.handleError(movieDetails)
    : this.setState({ statusError: false, selectedMovie: movieDetails });
  };

  handleError = errorCode => {
    this.setState({ statusError: true, statusErrorCode: errorCode });
  };

  render() {
    const { statusError, statusErrorCode, selectedMovie, movies } = this.state;

    return (
      <main className="bg-dark">
        <Switch>
          <Route
            path="/movies/:movie_id"
            render={props => (
              statusError ? (
                <Redirect to="/error" />
              ) : (
              <MovieDetails data={selectedMovie} {...props} />
            ))}
          />
          <Route
            path="/error"
            render={props =>
              !statusError ? (
                <Redirect to="/" />
              ) : (
                <ErrorPage errorCode={statusErrorCode} {...props} />
              )
            }
          />
          <Route
            path="/"
            render={props =>
              statusError ? (
                <Redirect to="/error" />
              ) : (
                <div className="card-deck">
                  {movies.map(movie => (
                    <MovieCard
                      key={movie.id}
                      data={movie}
                      getMovieDetails={this.getMovieDetails}
                      {...props}
                    />
                  ))}
                </div>
              )
            }
          />
        </Switch>
      </main>
    );
  }
}

export default App;
