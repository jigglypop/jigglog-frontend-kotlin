import React from "react";
import * as S from "./style";
import { useCommentActions } from "../../../store/comment/query";
import { IComments } from "../../../type/comment";
import { CancelButton } from "../../common/cancel/CancelButton";
import { useAtomValue } from "jotai";
import { userAtom } from "../../../store/user/atom";

export default function DeleteComment({
  comment,
  type,
}: {
  comment: IComments;
  type: "comment" | "recomment";
}) {
  const { onGoRemoveComment, onGoRemoveRecomment } = useCommentActions();
  const user = useAtomValue(userAtom);

  const onRemove = (commentId) => {
    if (type === "comment") {
      onGoRemoveComment(commentId);
    } else if (type === "recomment") {
      onGoRemoveRecomment(commentId);
    }
  };

  return (
    <S.DeleteWrapperDiv>
      {user &&
        user.user &&
        comment.user &&
        (comment.user.id === user.user.id || user.user.id === 1) && (
          <CancelButton
            className="delete-button"
            onClick={() => onRemove(comment.id)}
          ></CancelButton>
        )}
    </S.DeleteWrapperDiv>
  );
}
