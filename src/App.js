import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import ErrorPage from './errorPages/ErrorPage'
import { Route, Switch } from "react-router-dom";
import { getMovieDetailsAPI } from "./components/utilities/apiCalls";

class App extends Component {
  state = {
    selectedMovie: {},
    selectedMovieVideo: '',
    statusError: false,
    statusErrorCode: ''
  };

  getMovieDetails = async id => {
    this.setState({ statusError: false, selectedMovie: await getMovieDetailsAPI(id) });
  };

  handleError = errorCode => {
    this.setState({statusError: true, statusErrorCode: errorCode})
    console.log(errorCode, this.state)
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
            path="/error"
            render={props => (
              <ErrorPage errorCode={this.state.statusErrorCode} {...props} />
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