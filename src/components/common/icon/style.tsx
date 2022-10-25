import styled from "styled-components";
import { FlexCenter } from "../../../style/default";

export type IGradientIcon = {
  isHover: boolean;
};

export const GradientIconOuter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const GradientIcon = styled.div`
  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: transparent;
  overflow: hidden;
  cursor: pointer;

  margin: 0.2rem;
`;

export const GradientBorder = styled.div<IGradientIcon>`
  ${(props) => (props.isHover ? "" : "visibility: hidden;")}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  margin-top: 185%;
  width: 100%;
  height: 100%;

  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: white;

  cursor: pointer;
`;

export const GradientToolTip = styled.div<IGradientIcon>`
  ${(props) => (props.isHover ? "" : "visibility: hidden;")}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 5rem;
  width: 9rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;

  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;
  z-index: 10;

  p {
    color: white;
    font-size: 1.2rem;
    font-weight: 800;
  }
`;

export const AvatarToolTip = styled.div<IGradientIcon>`
  ${(props) => (props.isHover ? "" : "visibility: hidden;")}

  @keyframes gradient {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);

  margin-top: 5rem;
  width: 10rem;
  height: 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  background-color: black;

  border-radius: 0.4rem;
  box-shadow: 0 0 10px #1d1d1d;
  cursor: pointer;

  p {
    color: white;
    font-size: 1.2rem;
    margin: 0.6rem;
    font-weight: 800;
  }
`;
