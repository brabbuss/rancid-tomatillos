import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = ({errorCode}) => {
  const otherError = 
    <p>Sorry, there was an error. Please <Link to='/'>click here</Link> if you are not
  automatically redirected.</p>

  const error404 = <p>Sorry, but there's nothing at here at this url. Maybe it moved to a different URL? Please <Link to='/'>click here</Link> to go home, or enter a valid URL.</p> 

  return (
    <React.Fragment>
      <h1>Error Code: {errorCode}</h1>
      <h2>{errorCode === 404 ? error404 : otherError}</h2>
    </React.Fragment>
  );
};

export default ErrorPage;
