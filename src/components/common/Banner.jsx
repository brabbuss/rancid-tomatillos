import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import { fakeMovieData } from "../../data/fakeMovieData";
import '../../css/Banner.scss'

const { movies } = fakeMovieData;

const clone = () => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  const {
    id,
    backdrop_path: backdrop,
    average_rating: rating,
    release_date: release,
    title,
  } = randomMovie;
  return { id, backdrop, rating, release, title };
};

// TODO refactor user score calculation into utilities
const randomMovie1 = clone();
const randomMovie2 = clone();
const randomMovie3 = clone();

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie1.id}`}>
          <img
            className="d-block w-100"
            src={randomMovie1.backdrop}
            alt="First slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie1.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie1.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie1.id}`}>
          <img
            className="d-block w-100"
            src={randomMovie2.backdrop}
            alt="Third slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie2.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie2.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to={`/movies/${randomMovie3.id}`}>
          <img
            className="d-block w-100"
            src={randomMovie3.backdrop}
            alt="Third slide"
          />
        </Link>
        <Carousel.Caption>
          <h3>{randomMovie3.title}</h3>
          <p>
            Average User Score:{" "}
            {((randomMovie3.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
