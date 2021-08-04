import React from 'react';
import { useSelector } from 'react-redux';
import { Row } from 'reactstrap';
import { selectFavorites } from '../store/favoritesSlice';

import Image from './Image';

export default function MyGallery() {
  const favorites = useSelector(selectFavorites);

  return (
    <div>
      <Row className="p-2 text-center d-flex justify-content-around mt-5">
        {favorites.length <= 0 && (
          <h4 className="col-12 text-center text-light">no favorites found...</h4>
        )}
        {favorites.map((favorite) => (
          <Image
            key={favorite.id}
            id={favorite.id}
            location="gallery"
            imageUrl={favorite.image.url?.replace(/"/g, '')}
          />
        ))}
      </Row>
    </div>
  );
}
