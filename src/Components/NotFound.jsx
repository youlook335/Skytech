import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="heelo display-1 fw-bold text-danger animate__animated animate__zoomIn">
          404
        </h1>
        <p className="lead text-muted animate__animated animate__fadeIn animate__delay-1s">
          Oops! The page you're looking for does not exist.
        </p>
        <div className='d-flex justify-content-center animate__animated animate__fadeIn animate__delay-2s'> 

        <Link to="/" className="go-btn btn btn-primary animate__animated animate__fadeIn animate__delay-2s">
          Go Home
        </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
