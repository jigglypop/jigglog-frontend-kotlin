import { postLoginApi } from "../../api/Auth";
import { createToast } from "../../util/toast";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { loginFormAtom } from "./atom";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { useUpdateAtom } from "jotai/utils";
import { IUser } from "../../type/user";

export function useLoginActions() {
  const setModal = useUpdateAtom(modalAtom);
  const [loginform, setLoginForm] = useAtom(loginFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading } = useMutation(postLoginApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setLoginForm({
        username: "",
        password: "",
      });
      setModal({
        on: false,
        type: "",
      });
      createToast("로그인");
    },
    onError(res: Error) {
      setUser({
        ...user,
        error: "오류 : " + res.message,
      });
    },
  });

  const changeLoginForm = (e) => {
    setLoginForm({ ...loginform, [e.target.name]: e.target.value });
  };

  const initializeAuth = () => {
    setUser({
      ...user,
      error: "",
    });
  };

  const login = async () => {
    mutate(loginform);
  };

  return {
    login,
    loginform,
    changeLoginForm,
    initializeAuth,
    isLoading,
  };
}
