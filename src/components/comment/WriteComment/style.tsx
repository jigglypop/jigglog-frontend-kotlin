import styled from "styled-components";

export const WriteCommentDiv = styled.form`
  background: rgba(0, 0, 0, 0.05);
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 4fr;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }
`;

export const SmallTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin: 0.5rem 0.5rem 0.5rem 0;
    font-size: 1.2rem;
    outline: none;
    width: 100%;
    background-color: white;
    padding: 10px;
    border: none;
  }
`;

export const UserDiv = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr;
  grid-template-columns: 1fr 1fr;

  .user {
    display: flex;
    align-items: center;
    justify-content: center;

    grid-row: 1/2;
    grid-column: 1/3;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    grid-row: 2/3;
    grid-column: 1/3;

    button {
      padding: 1rem;
    }
  }
`;

export const LeftDiv = styled.div`
  grid-column: 1/2;
`;

export const RightDiv = styled.div`
  grid-column: 2/3;

  h4 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #4a00e0;
  }
  textarea {
    font-size: 1.2rem;
    outline: none;
    margin: 1rem;
    height: 20vh;
    width: 95%;
    padding: 1rem;
    box-sizing: border-box;
    background-color: white;
    border: none;
  }
`;
