import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { Route, Switch } from "react-router-dom";
import { getMovieDetailsAPI } from "./components/utilities/apiCalls";

class App extends Component {
  state = {
    selectedMovie: {},
    selectedMovieVideo: '',
    statusError: false
  };

  getMovieDetails = async id => {
    this.setState({ selectedMovie: await getMovieDetailsAPI(id) });
  };

  handleError = errorCode => {
    console.log(errorCode)
  }

  render() {
    return (
      <main className="bg-dark">
        <Switch>
          <Route
            path="/movies/:movie_id"
            render={props => (
              <MovieDetails data={this.state.selectedMovie} {...props} />
            )}
          />
          <Route
            path="/"
            render={props => (
              <Movies getMovieDetails={this.getMovieDetails} handleError={this.handleError} {...props} />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default App;