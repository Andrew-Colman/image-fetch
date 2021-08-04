import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #343a40;
  }
  html{
    scroll-behavior: smooth;
  }


.custom-control-label{
  cursor: pointer;
}

`;

export default GlobalStyle;
