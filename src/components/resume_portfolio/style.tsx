import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export const RPWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 10%;
  font-size: 150%;
  @media (max-width: 768px) {
    padding: 5%;
  }
  @media (max-width: 600px) {
    padding: 1%;
  }
`;

export const RPInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Carousel = styled(FlexCenter)``;

export const ItemWrapper = styled.div`
  display: inline-block;
  -webkit-filter: drop-shadow(3px 3px 2px gray);
  filter: drop-shadow(3px 3px 2px gray);
`;

export const CircleWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  text-align: center;
  border: 1.5px solid #ebebeb;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const User = styled(FlexCenter)`
  flex-direction: column;
  p {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 6rem;
    font-weight: 800;
  }
`;

export const ClearMobile = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SocialInformation = styled.section`
  font-size: 20px;
  text-align: center;
  a {
    padding: 0 6px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color};
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
  border: 1px solid ${({ theme: { color } }) => color};
  border-radius: 4px;
  outline: 0;
`;

export const Title = styled(FlexCenter)`
  position: relative;
  width: 100%;
  flex-direction: column;

  .portfolio-title {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 6rem;
    font-weight: 800;
  }

  .portfolio-url {
    margin: 1rem;
    font-family: "BMDOHYEON_ttf";
    font-size: 3rem;
    font-weight: 800;
  }

  @media (max-width: 1000px) {
    .portfolio-title {
      font-size: 5rem;
    }
    .portfolio-url {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 768px) {
    .portfolio-title {
      font-size: 3rem;
    }
    .portfolio-url {
      font-size: 1.6rem;
    }
  }
`;

export const NameTitle = styled.div`
  font-size: 25px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NameSmallTitle = styled.div`
  margin: 10px;
  font-size: 30px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NameEmail = styled.div`
  margin: 10px;
  font-size: 15px;
  font-weight: 800;
  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

export const PrintTitle = styled.div`
  font-size: 15px;
  font-weight: 800;

  margin: 5px;
`;

export const PostContent = styled.section`
  padding: 1rem 1rem 4rem;
  position: relative;
  width: 100%;
  .markdown-body {
    position: relative;
    width: 100%;
    color: white;
    h1 {
      padding: 1rem;
      background: white;
      color: black;
    }
    p,
    li {
      a {
        cursor: pointer;
        text-decoration: none;
        color: #feffb8;
      }
    }

    hr,
    br {
      background: #dfdfdf;
    }

    table {
      margin: 1rem;
      width: 100%;
      background: transparent;
    }
    td {
      color: white;
    }
  }
`;

export const RPPostContent = styled(PostContent)`
  /* p,
  li {
    font-size: 1.4rem !important;
    font-weight: 800;
  } */
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  .innerIcon {
  }
`;
