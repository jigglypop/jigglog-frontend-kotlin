import styled from "styled-components";

export const CommentUserDiv = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom: 3rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  flex-direction: column;

  h4 {
    font-size: 13px;
    font-weight: 800;
    color: black;
  }

  .user-item {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 1.2rem;
      font-weight: 800;
      color: black;
    }
  }

  .user-inner-item {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .user-name {
      margin: 0;
      padding: 0;
      font-size: 1.6rem;
      font-weight: 800;
    }
    .user-created-at {
      color: #c4c4c4;
    }
  }
`;
