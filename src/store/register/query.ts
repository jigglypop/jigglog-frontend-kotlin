import { createToast } from "../../util/toast";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { registerFormAtom } from "./atom";
import { postRegisterApi } from "../../api/Auth";
import { IUser } from "../../type/user";

export function useRegisterActions() {
  const [_, setModal] = useAtom(modalAtom);
  const [registerform, setRegisterForm] = useAtom(registerFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading } = useMutation(postRegisterApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setRegisterForm({
        username: "",
        password: "",
      });
      setModal({
        on: false,
        type: "",
      });
      createToast("회원가입");
    },
    onError(res: Error) {
      setUser({
        ...user,
        error: "오류 : " + res.message,
      });
    },
  });

  const changeRegisterForm = (e) => {
    setRegisterForm({ ...registerform, [e.target.name]: e.target.value });
  };

  const initializeAuth = () => {
    setUser({
      ...user,
      error: "",
    });
  };

  const register = async () => {
    mutate(registerform);
  };

  return {
    register,
    registerform,
    changeRegisterForm,
    initializeAuth,
    isLoading,
  };
}
