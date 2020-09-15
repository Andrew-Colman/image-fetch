import React from 'react';
import { Spinner, Row } from 'reactstrap';
import Image from './Image';
import { useQuery } from '../../../components/useQuery';

export default function GalleryGrid() {
  // Api data
  const { values, data, isLoading, isError } = useQuery('');

  /*   console.log(data.totalHits);
  console.log(URL); */
  return (
    <>
      <Row className="p-2 text-center d-flex justify-content-around overflow-hidden">
        {data.totalHits === 0 && (
          <div className="col text-white text-center lead"> no results...</div>
        )}
        {isError && <div className="col text-white text-center lead">Something went wrong ...</div>}
        {isLoading ? (
          <div className="m-auto fa-5x fa-pulse">
            <Spinner type="grow" color="success" />
          </div>
        ) : (
          <>
            {data.hits.slice(0, values.quantity).map((img) => (
              <div className="animate__animated animate__fadeInUp animate__delay-1s">
                <Image
                  Id={img.id}
                  key={img.largeImageURL}
                  Large={img.largeImageURL}
                  Author={img.user}
                  Downloads={img.downloads}
                  Home
                />
              </div>
            ))}
          </>
        )}
      </Row>
    </>
  );
}
