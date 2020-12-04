import axios from "axios";

// why does this only work inside of the Movies component and not when imported?

// export const getMovieData = async () => {
//   const movieData = await axios.get(
//     "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
//   );
//   return movieData.movies
// }

// why do I need to put async/await in both this function and inside the movies component method?

export const getMovieData = async () => {
  const movieData = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
  ).then(response => response.json());
  return movieData.movies;
};
