import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export type IHeader = {
  isLeft: boolean;
};

export const Header = styled(FlexCenter)<IHeader>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;

  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);

  padding: 20px;
  width: 100%;
  padding-left: ${(props) => (props.isLeft ? "20rem" : "0")};
  height: 5rem;
  justify-content: space-between;
  transition: all 0.3s ease-in;
  font-weight: 800;

  p {
    font-size: 1.4rem;
    border: 0.5rem;
    font-weight: 800;
    margin: 0.5rem;
  }

  @media (max-width: 600px) {
    padding-left: 0;
    .header-jigglog {
      display: none;
    }
  }
`;

export const SideBar = styled(FlexCenter)<IHeader>`
  padding-top: 2rem;
  flex-direction: column;
  justify-content: flex-start;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  box-shadow: 0 0 20px var(--black);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  width: 20rem;
  height: 100%;
  transform: ${(props) =>
    props.isLeft ? "translateX(0)" : "translateX(-20rem)"};
  transition: all 0.3s ease-in;
  font-weight: 800;

  .category-title {
    font-family: "BMDOHYEON_ttf";
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 2rem;
    border-bottom: 2px solid #dedede;
  }

  p {
    font-size: 1.2rem;
    border: 0.5rem;
    font-weight: 800;
    padding: 0.5rem;
    margin: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
  }

  @media (max-width: 600px) {
    top: 5rem;
    width: 16rem;

    p {
      font-size: 1rem;
      margin: 0.1rem;
      padding: 0.2rem 0.2rem;
      border-bottom: 0.15rem solid #b5b5b5;
      padding-bottom: 0.5rem;
      transform: all 0.3s ease-in;

      &.hover {
        opacity: 0.5;
      }
    }
  }
`;

export const HeaderInner = styled(FlexCenter)`
  .header-icon {
    cursor: pointer;
    font-size: 2.2rem;
    margin: 1rem;
    transition: all 0.3s ease-in;
  }
`;

type ISideBarItem = {
  color: string;
};

export const SideBarItem = styled(FlexCenter)<ISideBarItem>`
  position: relative;
  width: 100%;
  justify-content: flex-start;
  padding: 0.5rem 2rem;

  .sidebar-box {
    width: 3rem;
    height: 3rem;
    background-color: ${(props) => props.color};
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: black;
    font-size: 1.2rem;
    font-weight: 800;
    box-shadow: 0 0 5px ${(props) => props.color};
    transition: all 0.3s ease-in;
  }

  p {
    font-size: 1.1rem;
    font-weight: 800;
  }

  &:hover {
    .sidebar-box {
      box-shadow: 0 0 20px ${(props) => props.color};
    }
  }

  @media (max-width: 600px) {
    .sidebar-box {
      display: none;
    }
  }
`;
