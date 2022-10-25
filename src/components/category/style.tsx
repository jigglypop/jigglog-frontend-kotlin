import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export const CategoryOuter = styled(FlexCenter)`
  flex-direction: column;
  padding: 5%;
`;

export const CategoryTop = styled.div`
  position: relative;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;

  height: 30rem;
  padding: 5rem;
  background-color: rgb(7, 7, 7);
  border-radius: 1rem;
  box-shadow: 0 0 10px black;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .category-left {
    grid-column: 1/2;
    .category-title {
      margin: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 10rem;
      font-weight: 800;
    }

    .category-name {
      margin: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 6rem;
      font-weight: 800;
    }
  }

  .category-right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    grid-column: 2/3;
    height: 8rem;

    .category-item {
      position: relative;
      margin: 0;
      padding: 0;
      font-family: "BMDOHYEON_ttf";
      font-size: 1.5rem;
      font-weight: 800;
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    .category-left {
      .category-title {
        font-size: 8rem;
      }

      .category-name {
        font-size: 4rem;
      }
    }
  }

  @media (max-width: 900px) {
    height: 25rem;

    .category-left {
      .category-title {
        font-size: 6rem;
      }

      .category-name {
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 768px) {
    height: 20rem;

    .category-left {
      grid-column: 1/3;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
    .category-right {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .category-left {
      .category-title {
        font-size: 4rem;
      }

      .category-name {
        font-size: 2rem;
      }
    }
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  width: 100%;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;

  .infinite-scroll {
    position: relative;
    display: grid;
    align-items: center;
    text-align: center;
    flex-wrap: wrap;

    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .infinite-scroll-component {
    overflow: hidden !important;
  }
  @media (max-width: 1400px) {
    .infinite-scroll {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 1100px) {
    .infinite-scroll {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 700px) {
    .infinite-scroll {
      grid-template-columns: 1fr;
    }
  }
`;
