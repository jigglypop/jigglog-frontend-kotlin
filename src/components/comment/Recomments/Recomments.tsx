import React from "react";
import { IComments } from "../../../type/comment";
import CommentItem from "../CommentItem/CommentItem";
import WriteComment from "../WriteComment/WriteComment";
import * as S from "./style";

export default function Recomments({
  recomments,
}: {
  recomments: IComments[];
}) {
  return (
    <S.RecommentDiv>
      <S.RecommentWriteDiv>
        <WriteComment type="recomment" />
      </S.RecommentWriteDiv>
      <S.RecommentItemsDiv>
        {recomments &&
          recomments.map((recomment, index) => (
            <CommentItem key={index} comment={recomment} type="recomment" />
          ))}
      </S.RecommentItemsDiv>
    </S.RecommentDiv>
  );
}
