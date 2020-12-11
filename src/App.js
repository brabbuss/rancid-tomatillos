import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getMovieDataAPI,
  getMovieDetailsAPI,
  getMovieVideoAPI,
} from "./components/utilities/apiCalls";
import ErrorPage from "./components/errorPages/ErrorPage";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/common/NavBar";
import Movies from "./components/Movies";

class App extends Component {
  state = {
    selectedMovie: {},
    selectedMovieVideos: [],
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
    await getMovieDetailsAPI(id).then(movie =>
      this.setState({ selectedMovie: movie })
    );
    await getMovieVideoAPI(id).then(videos =>
      this.setState({ selectedMovieVideos: videos })
    );
    typeof this.state.selectedMovie === "number" // if movieDetails is a number, then it is an error code returned from API call!
      ? this.handleError(this.state.selectedMovie)
      : this.setState({ statusError: false });
  };

  handleError = errorCode => {
    this.setState({ statusError: true, statusErrorCode: errorCode });
  };

  render() {
    const {
      movies,
      statusError,
      statusErrorCode,
      selectedMovie,
      selectedMovieVideos,
    } = this.state;

    return (
      <main>
        <NavBar />
        <Switch>
          <Route
            path="/movies/:movie_id"
            render={props => {
              return statusError ? (
                <Redirect to="/error" />
              ) : (
                <MovieDetails
                  data={{ ...selectedMovie, selectedMovieVideos }}
                  syncMovieID={this.getMovieDetails}
                  {...props}
                />
              );
            }}
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
                <Movies
                  movies={movies}
                  getMovieDetails={this.getMovieDetails}
                  {...props}
                />
              )
            }
          />
        </Switch>
      </main>
    );
  }
}

export default App;
