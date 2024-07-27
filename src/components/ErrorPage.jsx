import React from "react";
import "./errorPage.css";

const ErrorPage = ({ error }) => {
  return (
    <>
      <div className="header">
        <div>
          <h1 className="title">JSONPlaceholder API</h1>
          <div className="error-container">
            {error === null ? (
              <div className="no-errors">No present errors.</div>
            ) : (
              <>
                <span className="error-occured">An Error has occured!</span>
                {/* <span className="error-message">{error.message}</span> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
