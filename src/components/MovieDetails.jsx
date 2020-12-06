import React from "react";
import "../css/MovieDetails.scss";


const MovieDetails = props => {
  const {
    title,
    poster_path: poster,
    backdrop_path: backdrop,
    release_date,
    overview,
    genres,
    budget,
    revenue,
    runtime,
    tagline,
    average_rating: rating,
  } = props.data;

  return (
    <React.Fragment>
      <img
        className="img-fluid backdrop kenburns-bottom-left"
        src={backdrop}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title">
          {title} {((rating / 10) * 100).toFixed() + "%"}
        </h5>
        <p className="card-text">
          <small className="text-muted">Release Date {release_date}</small>
        </p>
        {tagline && <p>{tagline}</p>}
        <p>{overview}</p>
        <p>{genres}</p>
        {budget > 0 && <p> Budget: ${budget.toLocaleString()}</p>}
        {revenue > 0 && <p> Revenue: ${revenue.toLocaleString()}</p>}
        {runtime > 0 && <p>Runtime: {runtime} minutes</p>}
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
