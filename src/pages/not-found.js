import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button } from 'reactstrap';

export default function NotFoundPage() {
  return (
    <div className="container-fluid text-center text-light">
      <div className="row d-flex align-items-center justify-content-center mt-2">
        <div className="col-12 col-md-4 animate__animated animate__fadeIn animate__delay-1s">
          <Alert color="info">
            <h4>404: page not found</h4>
          </Alert>
        </div>
      </div>

      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-md-4">
          <img
            className="img-fluid animate__animated animate__bounceIn"
            // eslint-disable-next-line max-len
            src="https://raw.githubusercontent.com/spectralapps/static-assets/33f842bd0e75fe35acea73797faa9f4da37f999d/svg/cat-in-space.svg"
            alt="404"
          />
        </div>
      </div>
      <div className="row d-flex align-items-center justify-content-center ">
        <div className="col-12 col-md-6 animate__animated animate__fadeIn animate__delay-1s">
          <Link to="/">
            <Button color="primary">Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
