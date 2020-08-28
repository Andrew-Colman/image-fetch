import React from 'react';
import { Col, Row } from 'reactstrap';
import Image from './Image';

export default function MyGallery(props) {
  const state = Object.values({ ...localStorage });

  return (
    <div>
      <Row>
        {state.map((x) => (
          <Col key={x} className=" p-2 m-2 ">
            <Image Large={x.replace(/"/g, '')} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
