import React from 'react';
import styled from 'styled-components';

import { saveImage } from '../server';

const StyledImg = styled.img`
  max-width: 300px !important;
  height: 200px !important;

  @media screen and (max-width: 500px) {
    max-width: 200px !important;
    height: 100px !important;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledCard = styled.div`
  transition: 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }
`;

export default function Image({ Author, Downloads, Large }) {
  return (
    <div className="col-6 col-sm-3 p-3 text-center">
      <StyledCard className="card hover">
        <StyledImg
          className="m-3 img-fluid align-self-center  "
          src={Large}
          alt=""
          onClick={() => window.open(Large, '_blank')}
        />
        <div className="card-footer">
          <small className="">
            Author:
            <strong>{Author}</strong>
          </small>
          <p className="fa-sm font-weight-light">
            Downloads:
            {Downloads}{' '}
            <button
              type="button"
              className="btn btn-success  m-1"
              href={Large}
              onClick={() => saveImage(`${Large}`)}
            >
              <i className="fas fa-save" />
            </button>
          </p>
        </div>
      </StyledCard>
    </div>
  );
}
