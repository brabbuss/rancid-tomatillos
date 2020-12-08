import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { fakeMovieData } from "../../data/fakeMovieData";

const { movies } = fakeMovieData;

const clone = () => {
  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];
  const {
    backdrop_path: backdrop,
    average_rating: rating,
    release_date: release,
    title,
  } = randomMovie;
  return { backdrop, rating, release, title };
};

// TODO refactor user score calculation into utilities
const randomMovie1 = clone();
const randomMovie2 = clone();
const randomMovie3 = clone();

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={randomMovie1.backdrop}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{randomMovie1.title}</h3>
          <p>
            Average User Score: {((randomMovie1.rating.toFixed(1) / 10) * 100).toFixed()}
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={randomMovie2.backdrop}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>{randomMovie2.title}</h3>
          <p>
            Average User Score: {((randomMovie2.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={randomMovie3.backdrop}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{randomMovie3.title}</h3>
          <p>
            Average User Score: {((randomMovie3.rating.toFixed(1) / 10) * 100).toFixed()}%
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
