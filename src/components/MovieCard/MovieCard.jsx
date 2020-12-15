import React from "react";
import "./MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const {
    id,
    poster_path: poster,
    title,
    average_rating: rating,
    release_date,
  } = props.data;

  return (
    <div className="col-sm-3">
      <div
        style={{ flex: "13rem", cursor: "pointer", border: "none" }}
        className="card card-template mt-3"
        onClick={() => props.getMovieDetails(id)}>
        <Link to={`/movies/${id}`}>
          <img className="card-img-top" src={poster} alt={`${id} poster`} />
        </Link>
        <div className="card-body text-dark">
          <h5 className="card-title">
            {title}
          </h5>
          <p className="card-text">
            <small className="text-muted">Release Date {release_date} </small>
            <small className="text-muted">User Rating {((rating / 10) * 100).toFixed() + "%"}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
