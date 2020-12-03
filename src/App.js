import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
class App extends Component {
  state = {
    selectedMovie: {},
  };

  getMovieDetails = async id => {
    const { data } = await axios.get(
      `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
    );
    this.setState({ selectedMovie: data.movie });
    console.log(this.state);
  };

  // async componentDidMount() {
  // }

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
              <Movies getMovieDetails={this.getMovieDetails} {...props} />
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default App;
