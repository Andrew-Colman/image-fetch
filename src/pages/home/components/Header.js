/* eslint-disable max-len */
import React, { useState } from 'react';
import { Collapse, Button, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';
import img from '../../../assets/img.jpeg';
import useScroll from '../../../components/useScroll';

const StyledHeader = styled.div`
  height: calc(100vh - 58px);
  background-image: url(${img});
  background-size: cover;
  width: 100%;
  margin: auto;

  .icon-filter {
    backdrop-filter: blur(2px);
    border-radius: 50%;
  }
  .icon {
    color: #33b5e5 !important;
    &:hover {
      color: #0099cc !important;
    }
  }
  @media screen and (max-width: 700px) {
    .icon-filter {
      backdrop-filter: blur(5px);
    }
    .icon {
      color: honeydew !important;
      &:hover {
        color: #444 !important;
      }
    }
  }
`;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { goTo } = useScroll();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <StyledHeader>
        <div className="container text-center text-white">
          <div style={{ backgroundColor: 'transparent' }} className="jumbotron px-4">
            <h1 className="display-4">Welcome</h1>
            <p className="lead">Spectral Apps fetch project</p>
            <div>
              <Button
                className="icon-filter"
                as="a"
                href="https://github.com/spectralapps/image-fetch"
                target="_blank"
                rel="noopener noreferrer"
                color="link "
              >
                <i className="fab fa-2x fa-github icon" />
              </Button>
            </div>
            <div>
              <Button
                className="icon-filter"
                color="link"
                onClick={toggle}
                style={{ marginBottom: '1rem' }}
              >
                <i className="fas fa-question-circle icon" />
              </Button>
            </div>
            <Collapse className="row mt-2 px-3 text-center" isOpen={isOpen}>
              <Card className="col bg-dark">
                <CardBody>
                  Description: Search Photos, Vectors and Illustrations from Pixabay
                  <br />
                  then the App displays the results (Images, Authors, number of downloads) (Download
                  any Image or save in the gallery)
                </CardBody>
              </Card>
            </Collapse>
          </div>

          <Button onClick={() => goTo(58)} color="primary">
            <i className="fas fa-chevron-down animate__animated animate__delay-1s animate__bounce " />
          </Button>
        </div>
      </StyledHeader>

      <hr />
    </>
  );
}
