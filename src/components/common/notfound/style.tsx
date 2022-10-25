import styled from "styled-components";

export const NotFound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  .title-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .title {
    font-family: "BMDOHYEON_ttf";
    font-size: 10rem;
    margin: 0;
    background: linear-gradient(
      45deg,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    color: transparent;
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
    -webkit-background-clip: text;
  }
  .text {
    font-family: "BMDOHYEON_ttf";
    font-size: 2rem;
    background: linear-gradient(
      45deg,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    color: transparent;
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
    -webkit-background-clip: text;
  }
  .error {
    color: #ff9797;
    font-family: "BMDOHYEON_ttf";
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0;
  }
`;
