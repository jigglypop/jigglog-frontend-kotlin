import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "NanumSquareL";
    src: url("/fonts/NanumSquareL.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumBarunGothicSubset";
    src: url("/fonts/NanumBarunGothic.ttf") format("truetype");
  }

  @font-face {
    font-family: "BMDOHYEON_ttf";
    src: url("/fonts/BMDOHYEON_ttf.ttf") format("truetype");
  }

  @font-face {
    font-family: "Consolas";
    src: url("/fonts/Consolas.ttf");
  }
  @font-face {
    font-family: "FiraMono-Regular";
    src: url("/fonts/FiraMono-Regular.ttf");
  }
  ${normalize}

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    overflow-x: hidden;
  }

  body {
    position: relative;
    margin-top: 50px;

    /* 넓이와 높이 */
    --slider-width: 150px;
    --text-pastel-black-dark: #353535;
    --text-black-dark: #000000;
    --text-white-dark: #FFFFFF;
    --body-background-dark: rgb(17, 21, 24);
    --header-background-dark: white;
    --header-gradient-picker: linear-gradient(45deg,#8e2de2,#4a00e0);
    --glass-picker: rgba(18, 255, 247, 0.8);
    --shadow-picker: 0 0 20px #219A95;

    /* 기본 백그라운드 */
    background: var(--body-background-dark);
    /* 스크롤 */
    ::-webkit-scrollbar {
      width: 1.5rem;
      background-color: var(--text-white-dark);
    }
    /* 스크롤 엄지부분 */
    ::-webkit-scrollbar-thumb {
      background: var(--header-gradient-picker);
      border-radius: 10px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    /* 스크롤 트랙 */
    ::-webkit-scrollbar-track {
      background-color: black;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
    /* 스크롤 코너 */
    ::-webkit-scrollbar-corner {
      background-color: black;
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * {
    font-family: 'NanumSquareL', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6 {
    font-family: 'NanumSquareL', sans-serif;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .next-link {
    cursor: pointer
  }

  input {
    border: none;
    border-right: 0px;
    border-top: 0px;
    border-left: 0px;
    border-bottom: 0px;
  }

  input:focus {
    outline:none;
  }

  button, button:focus{ 	
    border: none;
    outline: none;
  }

`;
