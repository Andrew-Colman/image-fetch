import React from 'react';
import { Col, Row } from 'reactstrap';
import { state } from '../../../server';
import Image from './Image';

export default function MyGallery() {
  return (
    <div>
      <Row>
        {state.posts.map((x) => (
          <Col key={x.id} className=" p-2 m-2 ">
            <Image Large={x.title} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
