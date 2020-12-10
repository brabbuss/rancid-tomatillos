import React from "react";
import "../css/MovieDetails.scss";
import ReactPlayer from "react-player/youtube";

const MovieDetails = props => {
  const {
    title,
    backdrop_path: backdrop,
    release_date,
    overview,
    genres,
    budget,
    revenue,
    runtime,
    tagline,
    average_rating: rating,
    selectedMovieVideos: videos,
  } = props.data;

  // if initial video cannot be retrieved, pick next video in array -
  // options to view different trailers, etc.
  // some movies only have one video! target 'trailer'

  function getVideo(type) {
    const matchedVideo = videos.find(v => v.type === type);
    return `https://www.youtube.com/watch?v=${matchedVideo.key}`;
  }

  console.log(genres)

  return (
    <React.Fragment>
      <img
        className="img-fluid backdrop kenburns-bottom-left"
        src={backdrop}
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title" className="text-primary">
          {title} {((rating / 10) * 100).toFixed() + "%"}
        </h5>
        <p className="card-text">
          <small className="text-white">Release Date {release_date}</small>
        </p>
        {tagline && <p>{tagline}</p>}
        <p>{overview}</p>
        {genres != undefined && genres.map(genre => <p>{genre}</p>)}
        {budget > 0 && <p>Budget: ${budget.toLocaleString()}</p>}
        {revenue > 0 && <p>Revenue: ${revenue.toLocaleString()}</p>}
        {runtime > 0 && <p>Runtime: {runtime} minutes</p>}
        {videos.length && (
          <ReactPlayer url={getVideo("Trailer")} width="100%" />
        )}
      </div>
    </React.Fragment>
  );
};

export default MovieDetails;
