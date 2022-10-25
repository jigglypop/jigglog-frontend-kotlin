import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export const PostItem = styled(FlexCenter)`
  min-width: 28rem;
  height: 35rem;
  border-radius: 1rem;
  margin: 2rem;
  background: rgb(15, 15, 15);
  box-shadow: 0 0 1rem rgb(15, 15, 15);

  .postitem-title {
    font-size: 1.2rem;
    font-weight: 800;
    color: white;
  }

  .postitem-summary {
    font-size: 1.1rem;
    font-weight: 800;
    color: #dfdfdf;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20rem 1fr 1fr;
  cursor: pointer;

  img {
    border-radius: 1rem 1rem 0 0;
    grid-row: 1/2;
    grid-column: 1/4;

    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in;
  }

  .title {
    grid-row: 2/3;
    grid-column: 1/3;
  }

  .under-left {
    padding: 1rem;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    align-items: center;

    grid-row: 3/4;
    grid-column: 1/2;

    .under-item {
      color: #dfdfdf;
      margin: 0.2rem;
      font-size: 1.6rem;
      font-weight: 800;
    }

    .under-text {
      color: #dfdfdf;
      margin: 0.2rem;
      font-size: 1rem;
      font-weight: 800;
    }
  }

  .under-right {
    grid-row: 3/4;
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;

    .under-tag {
      font-family: "BMDOHYEON_ttf";
      font-size: 1rem;
      font-weight: 800;
    }
  }

  &:hover {
    img {
      opacity: 0.2;
    }
  }

  @media (max-width: 700px) {
    grid-template-rows: 10rem 1fr 1fr;

    height: 20rem;
    border-radius: 1rem;
    margin: 1rem;
  }
`;

export const PostImage = styled.img`
  grid-row: 1/2;
  grid-column: 1/3;

  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
