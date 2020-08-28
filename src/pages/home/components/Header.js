/* eslint-disable max-len */
import React, { useState } from 'react';
import { Collapse, Button, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';
import img from '../../../assets/img.jpeg';

const StyledHeader = styled.div`
  height: calc(100vh - 58px);
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  margin: auto;
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function goTo() {
    window.scrollBy({
      top: window.innerHeight - 58,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <StyledHeader>
        <div className="container text-center text-white">
          <div style={{ backgroundColor: 'transparent' }} className="jumbotron px-4">
            <h1 className="display-4">Welcome</h1>
            <p className="lead">Spectral Apps fetch project</p>

            <Button color="link" onClick={toggle} style={{ marginBottom: '1rem' }}>
              <i className="fas fa-question-circle" />
            </Button>
            <Collapse className="row mt-2 px-3 text-center" isOpen={isOpen}>
              <Card className="col bg-dark">
                <CardBody>
                  Description: Search Photos, Vectors and Illustrations from Pixabay
                  <br />
                  then the App displays the results (Images, Authors, number of downloads) (Download
                  any Image)
                </CardBody>
              </Card>
            </Collapse>
          </div>

          <Button onClick={goTo} color="primary">
            <i className="fas fa-chevron-down animate__animated animate__delay-1s animate__bounce " />
          </Button>
        </div>
      </StyledHeader>

      <hr />
    </>
  );
}
