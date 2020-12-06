import React, { Component } from "react";
import "./App.css";
import Movies from "./components/tbd/Movies";
import MovieDetails from "./components/MovieDetails";
import MovieCard from "./components/MovieCard";
import { Route, Switch } from "react-router-dom";
import {
  getMovieDataAPI,
  getMovieDetailsAPI,
} from "./components/utilities/apiCalls";

class App extends Component {
  state = {
    selectedMovie: {},
    selectedMovieVideo: "",
    movies: [],
  };

  componentDidMount = async () => {
    this.setState({ movies: await getMovieDataAPI() });
  };

  getMovieDetails = async (id) => {
    this.setState({ selectedMovie: await getMovieDetailsAPI(id) });
  };

  handleError = errorCode => {
    this.setState({statusError: true, statusErrorCode: errorCode})
  }

  render() {
    const {statusError, statusErrorCode, movies} = this.state

    return (
      <main className="bg-dark">
        <Switch>
          <Route
            path="/movies/:movie_id"
            render={(props) => (
              <MovieDetails data={this.state.selectedMovie} {...props} />
            )}
          />
          <React.Fragment>
            <div className="card-deck">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  data={movie}
                  getMovieDetails={this.getMovieDetails}
                />
              ))}
            </div>
          </React.Fragment>
          {/* <Route
            path="/"
            render={(props) => (
              <Movies getMovieDetails={this.getMovieDetails} {...props} />
            )}
          /> */}
        </Switch>
      </main>
    );
  }
}

export default App;
