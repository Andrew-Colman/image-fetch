import React from 'react';
import { Col, Row } from 'reactstrap';
import FeaturedCarousel from './components/Carousel';

export default function FeaturedPage() {
  return (
    <>
      <Row className="container-fluid">
        <Col className="m-3 p-2 text-center">
          <FeaturedCarousel />
        </Col>
        <hr />
      </Row>
    </>
  );
}
