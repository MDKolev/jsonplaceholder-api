import React from "react";
import "./errorPage.css";
import { useNavigate } from "react-router-dom";


const ErrorPage = ({ error }) => {
  const navigate = useNavigate();

  const handleBackButton = () => {
    navigate("/");
  };

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
                <span className="error-message">{error.message}</span>
              </>
            )}
          </div>
          <button className="back-button" onClick={() => handleBackButton()}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
