import React, { useState } from 'react';
import { Collapse, Button, Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

import useScroll from '../hooks/useScroll';
import DynamicBackground from './DynamicBackground';

const HeaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  margin: auto;
  display: inline-block;
  overflow: hidden;
`;

const StyledHeader = styled.div`
  position: absolute;
  left: 0;
  right: 0;

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
      <HeaderContainer>
        <StyledHeader>
          <div className="container text-center text-white">
            <div style={{ backgroundColor: 'transparent' }} className="jumbotron px-4 mt-5 mt-lg-0">
              <h1 className="display-4">Welcome</h1>
              <p className="lead">Image fetch project</p>
              <div>
                <Button
                  className="icon-filter"
                  as="a"
                  href="https://github.com/andrew-colman/image-fetch"
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
                    then the App displays the results (Images, Authors, number of downloads)
                    (Download any Image or save in the gallery)
                  </CardBody>
                </Card>
              </Collapse>
            </div>

            <Button color="primary" onClick={() => goTo(58)}>
              <i
                className="fas fa-chevron-down animate__animated
                animate__delay-1s animate__bounce "
              />
            </Button>
          </div>
        </StyledHeader>
        <DynamicBackground />
      </HeaderContainer>
      <hr />
    </>
  );
}
