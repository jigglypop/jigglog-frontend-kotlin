import React, { ChangeEvent, FormEvent } from "react";
import { modalAtom } from "../../store/modal/atom";
import { GradientButton } from "../common/button/GradientButton";
import { GradientInput } from "../common/input/GradientInput";
import Modal from "../common/modal/Modal";
import { GradientText } from "../common/text/Text";
import * as S from "./style";
import { CancelButton } from "../common/cancel/CancelButton";
import { useAtom, useAtomValue } from "jotai";
import { useLoginActions } from "../../store/login/query";
import { useRegisterActions } from "../../store/register/query";
import { userAtom } from "../../store/user/atom";

export default function Auth() {
  const [modal, setModal] = useAtom(modalAtom);
  const user = useAtomValue(userAtom);
  const { login, loginform, changeLoginForm } = useLoginActions();
  const { register, registerform, changeRegisterForm } = useRegisterActions();

  const onLoginOrRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (modal.type === "login") {
      await login();
    } else if (modal.type === "register") {
      await register();
    }
  };

  const changeform = (e: ChangeEvent<HTMLInputElement>) => {
    if (modal.type === "register") {
      changeRegisterForm(e);
    } else {
      changeLoginForm(e);
    }
  };

  const ToggleType = () => {
    setModal({
      on: true,
      type: modal.type === "login" ? "register" : "login",
    });
  };

  const onClickCancel = () => {
    setModal({
      on: false,
      type: "",
    });
  };

  return (
    <Modal>
      <S.Auth>
        <CancelButton className="close" onClick={onClickCancel}></CancelButton>
        <GradientText className="login-text">
          {modal.type === "login" ? "LOGIN" : "REGISTER"}
        </GradientText>
        <form onSubmit={(e) => onLoginOrRegister(e)}>
          <GradientInput
            type={"text"}
            name={"username"}
            placeholder={"아이디 입력"}
            onChange={changeform}
            value={
              modal.type === "login"
                ? loginform.username
                : registerform.username
            }
          />
          <GradientInput
            type={"password"}
            name={"password"}
            placeholder={"비밀번호 입력"}
            onChange={changeform}
            value={
              modal.type === "login"
                ? loginform.password
                : registerform.password
            }
          />
          <p className="error">{user.error}</p>
          <div onClick={ToggleType}>
            <p className="toggle">
              {modal.type === "login" ? "아이디 생성하기" : "로그인하기"}
            </p>
          </div>
          <GradientButton>
            <p>{modal.type === "login" ? "로그인" : "아이디 생성"}</p>
          </GradientButton>
        </form>
      </S.Auth>
    </Modal>
  );
}
