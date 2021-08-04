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

  &:hover {
    cursor: pointer;
    transform: scale(1.04);
  }
`;

const StyledImg = styled.img`
  transition: 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 0.5rem;
  max-height: 60vh !important;

  @media screen and (max-width: 500px) {
    max-width: 100% !important;
  }
`;

export default function Image({ authorName, authorImage, downloads, imageUrl, id, isHome }) {
  return (
    <div className="col-auto m-0 m-md-2 p-3 animate__animated animate__fadeInUp animate__delay-1s ">
      <StyledCard>
        <StyledImg
          className="img-fluid shadow"
          src={imageUrl}
          alt="image"
          onDoubleClick={() => window.open(imageUrl, '_blank')}
        />
        <div className="fav animate__animated animate__bounceIn animate__delay-2s">
          <FavoriteButton imageUrl={imageUrl} id={id} location={isHome ? 'home' : 'gallery'} />
        </div>
        {isHome && (
          <ImageInfo authorName={authorName} downloads={downloads} authorImage={authorImage} />
        )}
      </StyledCard>
    </div>
  );
}
