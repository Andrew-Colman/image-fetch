import { Row } from 'reactstrap';

import { useSelector } from 'react-redux';
import { selectGallery } from '../store/gallerySlice';

import Image from './Image';
import Spinner from './Spinner';

export default function GalleryGrid() {
  const { images, status } = useSelector(selectGallery);

  if (status === 'error')
    return <div className="col text-white text-center lead">Something went wrong ...</div>;

  if (status === 'pending') return <Spinner />;

  return (
    <>
      <Row className="p-2 text-center d-flex justify-content-around overflow-hidden">
        {images.totalHits === 0 && (
          <div className="col text-white text-center lead"> no results...</div>
        )}
        {images.totalHits >= 1 &&
          images.hits &&
          images.hits.map((img) => (
            <Image
              id={img.id}
              key={img.id}
              imageUrl={img.largeImageURL}
              authorName={img.user}
              authorImage={img.userImageURL}
              downloads={img.downloads}
              isHome={true}
            />
          ))}
      </Row>

      {/* images.hasMorePages && <Row>More PAGES</Row> */}
    </>
  );
}
