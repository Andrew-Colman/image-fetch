import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import FeaturedCarousel from '../components/Carousel';

const StyledContainer = styled(Container)`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function FeaturedPage() {
  return (
    <>
      <StyledContainer>
        <FeaturedCarousel />
      </StyledContainer>
    </>
  );
}
