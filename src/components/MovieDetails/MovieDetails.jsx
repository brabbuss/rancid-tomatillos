import React from "react";
import "./MovieDetails.scss";
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

  const getReleaseYear = date => {
    return release_date.split("-")[0];
  };

  const getRatingColor = () => {
    if (rating >= 7) {
      return { color: "#0ff900" };
    } else if (rating <= 4.5) {
      return { color: "#ff5c5c" };
    } else {
      return { color: "#f9e600" };
    }
  };

  const ratingPercent = ((rating / 10) * 100).toFixed() + "%";

  const loading = (
    <div style={{ width: "100vh", height: "100vw", display: "flex" }}>
      <h1 style={{ fontSize: "20em", color: "white" }}>LOADING</h1>
    </div>
  );

  onLoad();

  return (
    <React.Fragment>
      {!title ? (
        loading
      ) : (
        <div className="page-wrapper">
          <div className="wrapper">
            <img
              className="img-fluid backdrop kenburns-bottom-left"
              src={backdrop}
              alt=""
            />
          </div>
          <div className="details-wrapper">
            <div className="details-text-container">
              <h1 className="">{title}</h1>
              <div className="sub-header">
                <h2 style={getRatingColor()}>{ratingPercent}</h2>
                <div className="sub-header-release-runtime">
                  <small>{getReleaseYear(release_date)}</small>
                  <small>{runtime} min</small>
                </div>
              </div>

              {tagline && <p>{tagline}</p>}
              {overview && <p>{overview}</p>}
              {genres && genres.map(genre => <p key={genre}>{genre}</p>)}
              {budget > 0 && <p>Budget: ${budget.toLocaleString()}</p>}
              {revenue > 0 && <p>Revenue: ${revenue.toLocaleString()}</p>}
            </div>
            {videos.length && (
              <div className="video-wrapper">
                <ReactPlayer
                  controls={true}
                  url={getVideo("Trailer")}
                  wrapper="div"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default MovieDetails;
