import React from "react";
import "../css/MovieCard.scss";

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
    <React.Fragment>
      <div style={{ flex: "13rem" }} className="card mt-3">
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">
            {title} {(rating/10*100).toFixed() + '%'}
          </h5>
          {/* <p className="card-text">
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </p> */}
          <p className="card-text">
            <small className="text-muted">Release Date {release_date}</small>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieCard;
