import { createToast } from "../../util/toast";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { registerFormAtom } from "./atom";
import { postRegisterApi } from "../../api/Auth";

export function useRegisterActions() {
  const [_, setModal] = useAtom(modalAtom);
  const [registerform, setRegisterForm] = useAtom(registerFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading } = useMutation(postRegisterApi, {
    onSuccess(res) {
      if (res.data) {
        localStorage.setItem("token", res.headers.token);
        setUser({ error: "", user: { ...res.data.data } });
        setRegisterForm({
          username: "",
          password: "",
        });
        setModal({
          on: false,
          type: "",
        });
        createToast("회원가입");
      } else {
        setUser({
          ...user,
          error: "오류 : " + res.err,
        });
      }
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
