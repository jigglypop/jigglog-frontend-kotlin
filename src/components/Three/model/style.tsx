import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

type ISmallTag = {
  // color: string;
};

export const SmallTag = styled.div<ISmallTag>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(22, 22, 22, 0.2);
  font-size: 8px;
  font-weight: 800;
  min-width: 50px;
  position: relative;
  height: 30px;
  width: 200px;

  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 0 10px #1d1d1d;

  .categoryset-text {
    font-size: 1rem;
    transition: all 0.3s ease-in;
    animation: ${blink} 1s infinite;
    cursor: pointer;
  }

  &:hover {
    .categoryset-text {
      font-size: 1.2rem;
    }
  }
`;
