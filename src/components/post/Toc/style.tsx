import styled from "styled-components";

export const VisibleTable = styled.div`
  position: sticky;
  display: block;
  top: 20vh;
  align-items: center;
  text-align: center;
  border-left: 0.4rem solid rgba(0, 0, 0, 0.4);

  @media (max-width: 992px) {
    display: none;
  }
`;

export const TocItemDiv = styled.div`
  display: block;
  margin-right: 20px;
  padding-left: 10px;
  font-size: 10px;
  text-align: left;
  cursor: pointer;

  h4 {
    color: rgb(150, 150, 150);
    font-size: 1.2rem;
    font-weight: 800;
    transition: all 0.5s ease-in-out;
  }

  &.isintersect h4 {
    color: black;
    font-size: 1.4rem;
    padding: 0.5em 0 0.5em;
  }
`;
