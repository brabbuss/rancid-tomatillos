import React from "react";
import "../css/MovieCard.scss";
import { Link } from "react-router-dom";

const MovieCard = props => {
  const {
    id,
    poster_path: poster,
    backdrop_path: backdrop,
    title,
    average_rating: rating,
    release_date,
  } = props.data;

  return (
    
      <div
        style={{ flex: "13rem", cursor: "pointer" }}
        className="card mt-3"
        onClick={() => props.onRoute(id)}>
        <Link to="/movies"><img className="card-img-top" src={poster} alt="" /></Link>
        <div className="card-body">
          <h5 className="card-title">
            {title} {((rating / 10) * 100).toFixed() + "%"}
          </h5>
          <p className="card-text">
            <small className="text-muted">Release Date {release_date}</small>
          </p>
        </div>
      </div>
    
  );
};

export default MovieCard;
