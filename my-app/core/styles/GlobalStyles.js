import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    background-color: transparent;
    width: 8px
  }

  /* background of the scrollbar except button or resizer */
  ::-webkit-scrollbar-track {
    background-color: transparent
  }

  ::-webkit-scrollbar-track:hover {
    background-color: transparent
  }

  /* scrollbar itself */
  ::-webkit-scrollbar-thumb {
    background-color: #424040;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #424040;
  }

  /* set button(top and bottom of the scrollbar) */
  ::-webkit-scrollbar-button {
    display: none
  }

  html,
  body {
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6, p {
      margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
    background: #151515;
  }
`
