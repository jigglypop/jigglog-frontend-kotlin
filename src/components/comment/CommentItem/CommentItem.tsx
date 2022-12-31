import React from "react";
import * as S from "./style";
import CommentUser from "../CommentUser/CommentUser";
import DeleteComment from "../DeleteComment/DeleteComment";
import Recomments from "../Recomments/Recomments";
import { useCommentActions } from "../../../store/comment/query";
import { ICommentItem } from "./type";

export default function CommentItem({ comment, type }: ICommentItem) {
  const { openId, setOpen, user } = useCommentActions();
  return (
    <div>
      {comment && (
        <S.CommentItemDiv type={type}>
          <S.CommentItemUpperDiv>
            <CommentUser user={comment.user} createdAt={comment.createdAt} />
            <DeleteComment comment={comment} type={type} />
          </S.CommentItemUpperDiv>
          <S.CommenItemContentDiv>
            <h4>
              {comment.user &&
              comment.user.username[0] === "M" &&
              user?.user?.username !== "ydh2244" &&
              comment.user.username !== user?.user?.username ? (
                <span>* 비밀글입니다</span>
              ) : (
                comment.content
              )}
            </h4>
          </S.CommenItemContentDiv>
          {type === "comment" && (
            <S.CommenItemLowerDiv>
              <S.OpenTextDiv onClick={() => setOpen({ openId: comment.id })}>
                {comment.recomments && openId.openId === comment.id ? (
                  <h4>{comment.recomments.length} 개의 대댓글 / 닫기</h4>
                ) : (
                  <h4>{comment.recomments.length} 개의 대댓글 / 대댓글 열기</h4>
                )}
              </S.OpenTextDiv>
            </S.CommenItemLowerDiv>
          )}
        </S.CommentItemDiv>
      )}
      {type === "comment" && openId.openId === comment.id && (
        <Recomments recomments={comment.recomments} />
      )}
    </div>
  );
}
