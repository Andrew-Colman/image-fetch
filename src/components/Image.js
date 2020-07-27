import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
  max-width: 300px !important;
  height: 200px !important;

  .hover {
    transition: 0.2s ease;
  }
  .hover:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }
  @media screen and (max-width: 500px) {
    .PixImage {
      max-width: 200px !important;
      height: 100px !important;
    }
  }
`;

export default function Image(props) {
  return (
    <div className="col-6 col-sm-3 p-3 text-center">
      <div className="card hover">
        <Img className="m-3 img-fluid align-self-center PixImage " src={props.Large} alt="" />
        <div className="card-footer">
          <small className="">
            Author: <strong>{props.Author}</strong>
          </small>
          <p className="fa-sm font-weight-light">
            Downloads: {props.Downloads}{' '}
            <button
              className="btn btn-link  m-1"
              href={props.Large}
              onClick={() => window.open(props.Large, '_blank')}
            >
              <i className="fas fa-file-download" />
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
