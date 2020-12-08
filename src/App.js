import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  getMovieDataAPI,
  getMovieDetailsAPI,
  getMovieVideoAPI,
} from "./components/utilities/apiCalls";
import ErrorPage from "./components/errorPages/ErrorPage";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import NavBar from "./components/common/NavBar";
import Banner from "./components/common/Banner";

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
    const movieDetails = await getMovieDetailsAPI(id);
    const selectedMovieVideos = await getMovieVideoAPI(id);
    typeof movieDetails === "number" // if movieDetails is a number, then it is an error code returned from API call!
      ? this.handleError(movieDetails)
      : this.setState({
          statusError: false,
          selectedMovie: movieDetails,
          selectedMovieVideos: selectedMovieVideos,
        });
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
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route
            path="/movies/:movie_id"
            render={props => {
              const id = props.match.params.movie_id;
              selectedMovie.id !== Number(id) && this.getMovieDetails(id);
              return statusError ? (
                <Redirect to="/error" />
              ) : (
                <MovieDetails
                  data={{ ...selectedMovie, selectedMovieVideos }}
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
                <React.Fragment>
                  <Banner />
                  <main className="bg-dark">
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
                  </main>
                </React.Fragment>
              )
            }
          />
        </Switch>
        {/* </main> */}
      </React.Fragment>
    );
  }
}

export default App;
