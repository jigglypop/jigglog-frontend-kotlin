import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { postCommentUserApi } from "../../api/Auth";
import { IUser } from "../../type/user";
import { commentUserFormAtom } from "./atom";

export function useCommentUserActions() {
  const [_, setModal] = useAtom(modalAtom);
  const [commentUserform, setCommentUserForm] = useAtom(commentUserFormAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, isLoading, isSuccess } = useMutation(postCommentUserApi, {
    onSuccess(res: IUser) {
      setUser({ error: "", user: { ...res } });
      setCommentUserForm({
        username: "",
        password: "",
      });
      setModal({
        on: false,
        type: "",
      });
    },
    onError(res: Error) {
      setUser({
        ...user,
        error: "오류 : " + res.message,
      });
    },
  });

  const changeCommentUserForm = (e) => {
    setCommentUserForm({ ...commentUserform, [e.target.name]: e.target.value });
  };

  const initializeAuth = () => {
    setUser({
      ...user,
      error: "",
    });
  };

  const commentUser = async () => {
    mutate(commentUserform);
  };

  return {
    commentUser,
    commentUserform,
    changeCommentUserForm,
    initializeAuth,
    isLoading,
    isSuccess,
  };
}
