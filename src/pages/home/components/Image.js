import React from 'react';
import styled from 'styled-components';

import FavoriteButton from './FavoriteButton';
import ImageInfo from './ImageInfo';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  transition: 0.2s ease;

  .fav {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.75rem;
  }

  .caption {
    position: absolute;
    bottom: 0;
    width: calc(100% - 1rem);
    margin: 0.5rem;
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2px);
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const StyledImg = styled.img`
  transition: 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  max-height: 60vh !important;
  margin: 0.5rem;

  @media screen and (max-width: 500px) {
    max-width: 100% !important;
  }
`;

export default function Image({ Author, Downloads, Large, Id, Home }) {
  return (
    <div className="col-auto p-3 animate__animated animate__fadeInUp animate__delay-1s ">
      <StyledCard>
        <StyledImg
          className="img-fluid shadow"
          src={Large}
          alt=""
          onClick={() => window.open(Large, '_blank')}
        />
        <div className="fav animate__animated animate__bounceIn animate__delay-2s">
          <FavoriteButton Large={Large} Id={Id} Location={Home ? 'home' : 'gallery'} />
        </div>
        {Home && (
          <div className="caption text-light animate__animated animate__fadeIn animate__delay-2s">
            <ImageInfo Author={Author} Downloads={Downloads} />
          </div>
        )}
      </StyledCard>
    </div>
  );
}
