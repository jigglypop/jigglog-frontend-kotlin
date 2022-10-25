import React from "react";
import { dateStringFormat } from "../../../util/date";
import Avatar from "../../common/avatar/Avatar";
import * as S from "./style";
import { ICommentUser } from "./type";

export default function CommentUser({ user, createdAt }: ICommentUser) {
  return (
    <S.CommentUserDiv>
      <div className="user-item">
        <Avatar
          boxShadow={"2px 2px 10px white"}
          width={"6rem"}
          height={"6rem"}
          className={"manager"}
          imageUrl={user ? user.imageUrl : ""}
        />
        <div className="user-inner-item">
          <p className="user-name">{user && user.username}</p>
          {createdAt && (
            <p className="user-created-at">
              {dateStringFormat(new Date(createdAt))}
            </p>
          )}
        </div>
      </div>
    </S.CommentUserDiv>
  );
}
