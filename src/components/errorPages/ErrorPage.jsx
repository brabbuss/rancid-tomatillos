import React from "react";

const ErrorPage = ({errorCode}) => {
  return (
    <React.Fragment>
      <h1>Error Code: {errorCode}</h1>
      <h2>
        Sorry, there was an error. Please refresh the page if you are not
        automatically redirected.
      </h2>
    </React.Fragment>
  );
};

export default ErrorPage;
