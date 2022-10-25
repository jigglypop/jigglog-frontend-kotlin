import styled from "styled-components";

export const GradientText = styled.p`
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
`;
