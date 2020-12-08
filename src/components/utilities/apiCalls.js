export const getMovieDataAPI = async () => {
  const response = await fetch(
    "https://rancid-tomatillos.herokuapp.com/api/v2/movies"  // test endpoint for 500 errors @ ("https://httpstat.us/500");
  );
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse.movies;
  } else {
    console.log(
      `Error! Code: ${response.status}
There seems to be a problem with the server. Please refresh the page.
      `
    );
    return response.status;
  }
};

export const getMovieDetailsAPI = async id => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`); // test endpoint for 500 errors @ ("https://httpstat.us/500");
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse.movie;
  } else {
    console.log(
      `Error! Code: ${response.status}
Something went wrong trying to find this movie. Please refresh the page.
    `
    );
    return response.status;
  }
};

export const getMovieVideoAPI = async id => {
  const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`);
  if (response.status >= 200 && response.status <= 299) {
    const jsonResponse = await response.json();
    return jsonResponse.videos;
  } else {
    console.log(
      `Error! Code: ${response.status}
Something went wrong trying to find this movie. Please refresh the page.
    `
    );
    return response.status;
  }
};



// why does axios only work inside of the Movies component and not when imported?

// export const getMovieData = async () => {
//   const movieData = await axios.get(
//     "https://rancid-tomatillos.herokuapp.com/api/v2/movies"
//   );
//   return movieData.movies
// }