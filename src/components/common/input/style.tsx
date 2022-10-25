import styled from "styled-components";

export type IInput = {
  fontSize?: string;
};

export const GradientInput = styled.div`
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
  flex-direction: row;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1.4rem 2rem 1.6rem;
  background: transparent;

  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 999;
    height: 2px;
    border-bottom-left-radius: 2px;
    border-bottom-right-radius: 2px;
    background-position: 0% 0%;
    background: linear-gradient(
      to right,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    animation: gradient 3s linear infinite;
  }

  input {
    width: 100%;
    flex-grow: 1;
    background: transparent;
    color: white;
    padding: 1rem 2rem;
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 2rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: white;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1d1d1d inset !important;
    transition: background-color 10000s ease-in-out 0s;
    -webkit-text-fill-color: #fff !important;
  }
`;

export const BoxInput = styled.div<IInput>`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  border-radius: 2px;
  background: #f3f3f3;

  input {
    width: 100%;
    background: transparent;
    padding: 1rem;
    font-size: ${(props) => (props.fontSize ? props.fontSize : "1.5rem")};
    font-weight: 800;
    line-height: 1rem;
    vertical-align: middle;
    &::-webkit-input-placeholder {
      color: #c2c2c2;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #1d1d1d inset !important;
    transition: background-color 10000s ease-in-out 0s;
    -webkit-text-fill-color: black !important;
  }
`;
