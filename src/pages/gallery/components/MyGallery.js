import React from 'react';
import { Row } from 'reactstrap';
import { GalleryContext } from '../../../components/GalleryContext';
import Image from '../../home/components/Image';

export default function MyGallery() {
  const [values] = React.useContext(GalleryContext);
  const favorites = values.storage;
  React.useEffect(() => {}, [values]);

  return (
    <div>
      <Row className="p-2 text-center d-flex justify-content-around">
        {favorites.length <= 0 && (
          <h4 className="col-12 text-center text-light">no favorites found...</h4>
        )}
        {favorites.map((x) => (
          <Image
            key={x[0]}
            Id={x[0].replace(/image-fetch-/g, '')}
            Location="gallery"
            Large={x[1].replace(/"/g, '')}
          />
        ))}
      </Row>
    </div>
  );
}
