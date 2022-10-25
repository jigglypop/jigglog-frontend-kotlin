import styled from "styled-components";

// 댓글 아이템 위
export const DeleteWrapperDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: center;

  .delete-button {
    color: #1d1d1d;
    background-color: transparent;
    font-size: 2.5rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }

  .errormsg {
    font-size: 10px;
    font-weight: 800;
    color: #ff416c;
  }
`;
