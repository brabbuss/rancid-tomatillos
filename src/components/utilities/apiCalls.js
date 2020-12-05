// why does axios only work inside of the Movies component and not when imported?

// export const getMovieData = async () => {
//   const movieData = await axios.get(
//     "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
//   );
//   return movieData.movies
// }

// why do I need to put async/await in both this function and inside the movies component method?

// export const getMovieDataAPI = async () => {
//   const movieData = await fetch(
//     "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
//   ).then(response => response.json());
//   return movieData.movies;
// };


export const getMovieDataAPI = async () => {
  const response = await fetch("https://httpstat.us/500");
  // const response = await fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies");
  if (response.status >= 200 && response.status <= 299) {
    // No errors
    const jsonResponse = await response.json();
    return jsonResponse.movies
  } else {
    // Handle 500 errors
    console.log(response);
    console.log(
      `Error! Code: ${response.status}
There seems to be a problem with the server. Please refresh the page.
      `)
    return response.status
  }
}

export const getMovieDetailsAPI = async id => {
  const movieDetails = await fetch(
    `https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`
  ).then(response => response.json());
  console.log(movieDetails)
  return movieDetails.movie;
};
