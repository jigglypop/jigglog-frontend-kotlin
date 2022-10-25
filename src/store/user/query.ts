import { getCheckApi } from "../../api/Auth";
import { modalAtom } from "../modal/atom";
import { useAtom, useAtomValue } from "jotai";
import { userAtom } from "./atom";
import { useMutation } from "react-query";
import { useEffect } from "react";
import { createToast } from "../../util/toast";
import { useRouter } from "next/router";
import { useUpdateAtom } from "jotai/utils";

export function useUserQueryEffect() {
  const setModal = useUpdateAtom(modalAtom);
  const [user, setUser] = useAtom(userAtom);
  const { mutate, data, isError, error, isLoading } = useMutation(getCheckApi, {
    onSuccess(res) {
      setUser({ error: "", user: { ...res.data.data } });
      setModal({
        on: false,
        type: "",
      });
    },
    onError() {
      setUser({
        ...user,
        error: "",
      });
    },
  });
  // 라이프사이클
  // 체크 로직
  useEffect(() => {
    mutate();
  }, []);
  return { check: mutate, data, isError, error, isLoading };
}

export function useUserActions() {
  const setModal = useUpdateAtom(modalAtom);
  const setUser = useUpdateAtom(userAtom);
  const router = useRouter();

  const logout = async () => {
    localStorage.clear();
    setUser({ error: "", user: null });
    setModal({
      on: false,
      type: "",
    });
    router.push("/");
    createToast("로그아웃 ");
  };

  const commentLogout = async () => {
    localStorage.clear();
    setUser({ error: "", user: null });
    setModal({
      on: false,
      type: "",
    });
    createToast("로그아웃 ");
  };

  return {
    logout,
    commentLogout,
  };
}

// write, update 권한 체크
export function useIsOwnerEffect() {
  const router = useRouter();
  const user = useAtomValue(userAtom);
  useEffect(() => {
    if (user.user) {
      if (user.user.id !== 1) {
        router.push("/");
      }
    } else {
      router.push("/");
    }
  }, [user]);
  return { user };
}
