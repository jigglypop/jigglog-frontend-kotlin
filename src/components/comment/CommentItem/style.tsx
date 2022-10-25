import styled from "styled-components";

interface ICommentS {
  type: "comment" | "recomment";
}

export const OpenTextDiv = styled.div`
  cursor: pointer;
  h4 {
    font-size: 1.2rem;
    font-weight: 800;
    color: #4a00e0;
  }
`;

export const OpenDiv = styled.div`
  display: none;
  &.isopen {
    display: inline;
  }
`;

// 댓글 아이템들
export const CommentItemsDiv = styled.div`
  position: relative;
  grid-row: 3/4;
`;

// 댓글 아이템 위
export const CommentItemUpperDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;

  padding: 10px;
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 10px;
  border-top: 2px solid #e6e6e6;

  h4 {
    font-size: 10px;
    font-weight: 800;
    color: gray;
  }

  .cancel {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

// 댓글 컨텐츠
export const CommenItemContentDiv = styled.div`
  position: relative;
  grid-column: 1/3;
  grid-row: 2/3;
  padding: 10px;

  h4 {
    font-size: 1.4rem;
    font-weight: 800;
    color: black;
  }
`;
// 댓글 아래
export const CommenItemLowerDiv = styled.div`
  position: relative;
  grid-column: 1/3;
  grid-row: 3/4;
  padding: 10px;
`;

// 외부
export const CommentItemDiv = styled.div<ICommentS>`
  position: relative;
  display: grid;
  background-color: ${(props) =>
    props.type === "comment" ? "white" : "rgba(0, 0, 0, 0.05)"};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${(props) =>
    props.type === "comment" ? "10rem 1fr 1fr" : "10rem 1fr"};
  margin: 1%;
`;
