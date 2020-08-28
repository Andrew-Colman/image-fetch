import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 50vh !important;
  max-height: 80vh !important;

  @media screen and (max-width: 500px) {
    max-width: 30vh !important;
    max-height: 50vh !important;
  }
  &:hover {
    cursor: pointer;
  }
`;

const StyledCard = styled.div`
  transition: 0.2s ease;
  background: rgba(1, 1, 1, 0.2);

  &:hover {
    background-color: rgba(1, 1, 1, 0.5);
    transform: scale(1.03);
  }
`;

export default function Image({ Large }) {
  return (
    <StyledCard className="card hover mx-auto shadow-sm p-1">
      <StyledImg
        className="m-3 img-fluid align-self-center  "
        src={Large}
        alt=""
        onClick={() => window.open(Large, '_blank')}
      />
    </StyledCard>
  );
}
