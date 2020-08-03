import React from 'react';
import styled from 'styled-components';

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

export default function Image({ Large }) {
  return (
    <StyledCard className="card hover">
      <StyledImg
        className="m-3 img-fluid align-self-center  "
        src={Large}
        alt=""
        onClick={() => window.open(Large, '_blank')}
      />
    </StyledCard>
  );
}
