import styled from "styled-components";

export const CommentDiv = styled.div`
  margin-top: 10rem;
  position: relative;
  width: 100%;
  display: grid;
`;
// 댓글 위 카운트
export const CommentCountDiv = styled.div`
  position: relative;
  grid-row: 1/2;

  h4 {
    margin: 1.4rem;
    font-size: 2rem;
    font-weight: 800;
    color: black;
  }
`;
// 댓글 기입
export const CommentWriteDiv = styled.div`
  position: relative;
  grid-row: 2/3;
`;

// 댓글 아이템들
export const CommentItemsDiv = styled.div`
  position: relative;
  grid-row: 3/4;
`;
