import React from "react";
import "../css/MovieDetails.scss";
import ReactPlayer from "react-player/youtube";

const MovieDetails = props => {
  const {
    id: movie_id,
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

  function onLoad() {
    window.scrollTo(0, 0);
    const id = props.match.params.movie_id;
    if (+id !== movie_id) {
      props.syncMovieID(id);
    }
  }

  function getVideo(type) {
    const matchedVideo = videos.find(v => v.type === type);
    return `https://www.youtube.com/watch?v=${matchedVideo.key}`;
  }

  const loading = (
    <div style={{ width: "100vh", height: "100vw", display: "flex" }}>
      <h1 style={{ fontSize: "20em", color: "white" }}>LOADING</h1>
    </div>
  );

  onLoad();

  return (
    <section>
      {!title ? (
        loading
      ) : (
        <div>
          <div className='wrapper'>
            <img
              className="img-fluid backdrop kenburns-bottom-left"
              src={backdrop}
              alt=""
            />
          </div>
          <div className="card-body">
            <h5 className="card-title text-primary">
              {title} {((rating / 10) * 100).toFixed() + "%"}
            </h5>
            <p className="card-text">
              <small className="text-white">Release Date {release_date}</small>
            </p>
            {tagline && <p>{tagline}</p>}
            <p>{overview}</p>
            {genres && genres.map(genre => <p key={genre}>{genre}</p>)}
            {budget > 0 && <p>Budget: ${budget.toLocaleString()}</p>}
            {revenue > 0 && <p>Revenue: ${revenue.toLocaleString()}</p>}
            {runtime > 0 && <p>Runtime: {runtime} minutes</p>}
            {videos.length && (
              <ReactPlayer url={getVideo("Trailer")} width="100%" />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MovieDetails;
