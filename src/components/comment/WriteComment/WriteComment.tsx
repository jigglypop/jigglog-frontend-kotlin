import { useAtomValue } from "jotai";
import React from "react";
import { useCommentActions } from "../../../store/comment/query";
import { useLoginActions } from "../../../store/login/query";
import { useRegisterActions } from "../../../store/register/query";
import { userAtom } from "../../../store/user/atom";
import { useUserActions } from "../../../store/user/query";
import Avatar from "../../common/avatar/Avatar";
import { BlackButton } from "../../common/button/BlackButton";
import * as S from "./style";

export type IWriteComment = {
  type: string;
};

export default function WriteComment({ type }: IWriteComment) {
  const user = useAtomValue(userAtom);
  const { login, changeLoginForm } = useLoginActions();
  const { register, changeRegisterForm, registerform } = useRegisterActions();
  const { commentLogout } = useUserActions();
  const { error, onChangeComment, onSubmitComment, onSubmitRecomment } =
    useCommentActions();

  const onLogout = (e) => {
    e.preventDefault();
    commentLogout();
  };
  // 로그인 상태에서 댓글 작성
  const submitAndComment = async (e) => {
    e.preventDefault();
    if (type === "comment") {
      onSubmitComment(e);
    } else if (type === "recomment") {
      onSubmitRecomment();
    }
  };

  const submitRegisterAndComment = async (e) => {};

  return (
    <S.WriteCommentDiv
      onSubmit={(e) =>
        user.user ? submitAndComment(e) : submitRegisterAndComment(e)
      }
    >
      <S.LeftDiv>
        {user.user ? (
          <S.UserDiv>
            <div className="user">
              <Avatar
                boxShadow={"2px 2px 10px white"}
                width={"4rem"}
                height={"4rem"}
                className={"manager"}
                imageUrl={user.user.imageUrl}
              />
            </div>
            <div className="button">
              <BlackButton onClick={(e) => onLogout(e)}>
                <p>로그아웃</p>
              </BlackButton>
              <BlackButton>
                <p>등록</p>
              </BlackButton>
            </div>
          </S.UserDiv>
        ) : (
          <S.SmallTextDiv>
            <input
              autoComplete="off"
              value={registerform.username}
              name="username"
              placeholder="닉네임"
              onChange={(e) => changeRegisterForm(e)}
            />
            <input
              autoComplete="off"
              value={registerform.password}
              name="password"
              type="password"
              placeholder="비밀번호"
              onChange={(e) => changeRegisterForm(e)}
            />
            <BlackButton>
              <p>등록</p>
            </BlackButton>
          </S.SmallTextDiv>
        )}
      </S.LeftDiv>
      <S.RightDiv>
        <textarea
          autoComplete="content"
          className="writecomment-textarea"
          name="content"
          placeholder="댓글 내용을 입력하세요"
          onChange={(e) => onChangeComment(e)}
        />
        <h4 className="errormsg">{error}</h4>
      </S.RightDiv>
    </S.WriteCommentDiv>
  );
}
