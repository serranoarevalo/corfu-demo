import { createGlobalStyle } from "styled-components";
import resetCSS from "reset-css";

const GlobalStyle = createGlobalStyle`
  ${resetCSS};
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700');
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color:#FAFAFA;
    -moz-osx-font-smoothing: grayscale;
    height:100%;
  }
  html{
    height:100%;
  }
  *{
    box-sizing:border-box;
  }
  a {
    color:inherit;
    text-decoration:none;
  }
`;

export default GlobalStyle;
