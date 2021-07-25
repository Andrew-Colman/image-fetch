import React from 'react';

export default function Footer() {
  return (
    <div className="row mt-2">
      <div className="col text-center text-white mb-2">
        <hr />
        <footer className="p-4">
          <h6 className="text-primary">
            &copy; <a href="https://andrew-colman.com">Andrew Colman</a>
            <a href="https://github.com/andrew-colman/image-fetch">
              <i className="fab fa-github ml-2" />
            </a>
          </h6>
          <small>
            <a
              className="text-muted"
              href="https://pixabay.com/service/license/"
              target="_blank"
              rel="noreferrer"
            >
              Images License
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
