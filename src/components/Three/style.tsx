import styled from "styled-components";

export const ThreeWrapper = styled.div`
  top: 0;
  left: 0;
  /* background: linear-gradient(to right, #8e2de2, #4a00e0); */
  width: 100vw;
  height: 100vh;
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  position: fixed;

  background: rgba(22, 22, 22, 0.2);
  top: 100px;
  right: 100px;
  line-height: 1.5rem;
  font-size: 12px;

  width: 40rem;
  min-width: 5rem;
  height: 20rem;

  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;
  z-index: 15;

  h1 {
    font-size: 26px;
    font-weight: 800;
    margin: 20px;
  }
  h3 {
    font-size: 12px;
    font-weight: 800;
    margin: 2px;
    padding: 0;
  }
  h2 {
    font-size: 12px;
    margin: 10px;
    font-weight: 600;
    text-shadow: 0 0 10px white;
  }

  &.isWide {
    display: none;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MainTitle = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.6);

  width: 50rem;
  min-width: 5rem;
  height: 20rem;

  border-radius: 10px;
  padding: 30px;
  --webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  z-index: 5;
  box-shadow: 0 0 30px rgb(30, 30, 30);

  .main-title {
    margin: 1rem;
    position: relative;
    font-family: "BMDOHYEON_ttf";
    font-size: 8rem;
    font-weight: 800;
  }

  .main-description {
    margin: 1rem;
    position: relative;
    font-family: "BMDOHYEON_ttf";
    font-size: 1.2rem;
    font-weight: 800;
  }
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 600px) {
    width: 25rem;
    height: 15rem;

    .main-title {
      font-size: 3em;
      font-weight: 800;
    }
    .main-description {
      font-size: 0.8rem;
    }
  }
`;
