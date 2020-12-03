import React, { Component } from "react";
import "./App.css";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import { Route, Switch } from "react-router-dom";
class App extends Component {
  handleRouting = id => {
    console.log(id);
  };

  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/movies/" component={MovieDetails} />
          <Route
            path="/"
            render={(props) => <Movies onRoute={this.handleRouting} {...props} />}
          />
        </Switch>
      </main>
    );
  }
}


export default App;
