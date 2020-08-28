import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: calc(100vh - 58px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loading() {
  return (
    <div className="container-fluid">
      <StyledDiv>
        <Spinner size="xl" color="primary" />
      </StyledDiv>
    </div>
  );
}
