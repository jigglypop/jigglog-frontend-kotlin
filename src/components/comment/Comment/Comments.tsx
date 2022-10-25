import CommentItem from "../CommentItem/CommentItem";
import React from "react";
import * as S from "./style";
import { useCommentActions } from "../../../store/comment/query";
import WriteComment from "../WriteComment/WriteComment";

export default function Comments() {
  const { comments } = useCommentActions();
  return (
    <S.CommentDiv>
      <S.CommentCountDiv>
        {comments && <h4>{comments.length} 개의 댓글이 달렸습니다</h4>}
      </S.CommentCountDiv>
      <S.CommentWriteDiv>
        <WriteComment type="comment" />
      </S.CommentWriteDiv>
      <S.CommentItemsDiv>
        {comments &&
          comments.map((comment, index) => (
            <CommentItem comment={comment} key={index} type="comment" />
          ))}
      </S.CommentItemsDiv>
    </S.CommentDiv>
  );
}
