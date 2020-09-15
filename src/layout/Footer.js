import React from 'react';

export default function Footer() {
  return (
    <div className="row mt-2">
      <div className="col text-center text-white mb-2">
        <hr />
        <footer>
          <small className="text-primary">
            {' '}
            &copy; Spectral Apps{' '}
            <i href="https://github.com/spectralapps" className="fab fa-github" />
          </small>
        </footer>
      </div>
    </div>
  );
}
