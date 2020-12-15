import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.scss";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  searchForMovies = event => {
    this.props.searchMovies(this.state.search);
    this.setState({ search: "" });
  };

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand navbar-light bg-black">
        <div className="container-fluid">
          <div className="brand-block">
            <NavLink to="/" className="navbar-brand text-white">
              {"[ TMDB ]"}
            </NavLink>
            <small>The Turing Movie Database</small>
          </div>
          <div
            className="search-block collapse navbar-collapse"
            id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white active"
                  aria-current="page"
                  href="/">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search by Title"
                aria-label="Search"
                name="input"
                value={this.state.search}
                onChange={event => this.handleChange(event)}
              />
              <Link to="/results">
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={event => this.searchForMovies(event)}>
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
