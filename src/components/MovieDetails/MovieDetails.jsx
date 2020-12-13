import React from "react";
// import {checkBudgetInfo} from '../utilities/dataCleaning'
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

    // id && checkBudgetInfo(props.data)
  }

  function getVideo(type) {
    const matchedVideo = videos.find(v => v.type === type);
    return `https://www.${matchedVideo.site.toLowerCase()}.com/watch?v=${
      matchedVideo.key
    }`;
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

  const getProgressBarBadge = () => {
    const gain = calculateProfit()[1];
    let color = '';
    if (gain > 70) {
      color = 'bg-success'
    } else if (gain < 30) {
      color = 'bg-danger'
    } else {
      color = 'bg-warning'
    }
    return `progress-bar ${color}`
  }

  const calculateProfit = () => {
    const gain = revenue / budget;
    const gainPercent = (gain * 100).toFixed();
    return gain > 0.99 ? ["100", gainPercent] : [gainPercent, gainPercent];
  };

  const ratingPercent = ((rating / 10) * 100).toFixed() + "%";

  const loadingScreen = (
    <div style={{ width: "100vh", height: "100vw", display: "flex" }}>
      <h1 style={{ fontSize: "20em", color: "white" }}>LOADING</h1>
    </div>
  );

  onLoad();

  return (
    <React.Fragment>
      {!title ? (
        loadingScreen
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
                  <small style={{ fontWeight: 600 }}>|</small>
                  <small>{runtime} min</small>
                </div>
              </div>
              {tagline && <h3>{tagline}</h3>}
              {overview && <p>{overview}</p>}
              <div className="genres-container">
                {genres &&
                  genres.map(genre => (
                    <h5 key={genre}>
                      <span className="genre badge badge-secondary">
                        {genre}
                      </span>
                    </h5>
                  ))}
              </div>
              <div className="budget-revenue-container">
                {budget > 0 && (
                  <div className="budget-revenue genre badge badge-secondary">
                    <p>Budget</p>
                    <p>${budget.toLocaleString()}</p>
                  </div>
                )}
                {revenue > 0 && (
                  <div className="budget-revenue genre badge badge-secondary">
                    <p>Revenue</p>
                    <p>${revenue.toLocaleString()}</p>
                  </div>
                )}
              </div>
              {budget && revenue && (
                <div>
                  <p>Return</p>
                  <div className="progress-bg badge badge-secondary progress">
                    <div
                      className={getProgressBarBadge()}
                      role="progressbar"
                      style={{ width: `${calculateProfit()[1]}%` }}
                      aria-valuenow={calculateProfit()[1]}
                      aria-valuemin="0"
                      aria-valuemax="100">
                      {calculateProfit()[0]}%
                    </div>
                  </div>
                </div>
              )}
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
