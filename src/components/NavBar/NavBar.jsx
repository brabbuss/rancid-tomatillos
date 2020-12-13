import React, {Component} from 'react';
import {NavLink, Link} from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      search: ''
    }
  }


  handleChange = event => {
    this.setState({search: event.target.value})
  }

  searchForMovies = event => {
    this.props.searchMovies(this.state.search)
  }

  render() {
  return ( 
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to='/' className="navbar-brand">Rancid Tomatillos</NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
          </ul>
          
          <form className="d-flex">
            <input className="form-control me-2" type="text" placeholder="Search by Title" aria-label="Search" name='input' value={this.state.input} onChange={event => this.handleChange(event)}/>
            <Link to="/results"><button className="btn btn-outline-success" type="submit" onClick={event => this.searchForMovies(event)}>Search</button></Link>
          </form>
        </div>
      </div>
    </nav>
  );
  }
}
 
export default NavBar;