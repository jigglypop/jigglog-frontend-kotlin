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
        <h6>
          닉네임과 비밀번호를 입력하지 않으면 자동으로 "비공개"로 댓글을 쓸 수
          있습니다.
        </h6>
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
