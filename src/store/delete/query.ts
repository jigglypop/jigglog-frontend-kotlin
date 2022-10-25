import { createToast } from "../../util/toast";
import { modalAtom } from "../modal/atom";
import { useAtom } from "jotai";
import { userAtom } from "../user/atom";
import { useMutation } from "react-query";
import { deleteAtom } from "./atom";
import { deletePostApi } from "../../api/Post";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useUpdateAtom } from "jotai/utils";

export function useDeleteActions() {
  const setModal = useUpdateAtom(modalAtom);
  const [deleteform, setDeleteForm] = useAtom(deleteAtom);
  const [user, setUser] = useAtom(userAtom);
  const router = useRouter();

  // 삭제할 아이디 세팅
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setDeleteForm({
        id: parseInt(id as string),
      });
    }
  }, []);

  const { mutate, isLoading } = useMutation(deletePostApi, {
    onSuccess() {
      setDeleteForm({
        id: -1,
      });
      setModal({
        on: false,
        type: "",
      });
      router.push("/");
      createToast("글 삭제");
    },
    onError(res: { message: string }) {
      setUser({
        ...user,
        error: "오류 : " + res.message,
      });
    },
  });

  const deletePost = async () => {
    if (user.user && user.user.id === 1 && deleteform.id !== -1) {
      mutate(deleteform);
    }
  };

  return {
    deletePost,
    isLoading,
  };
}
