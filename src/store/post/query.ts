import axios from "axios";
import { useUpdateAtom } from "jotai/utils";
import { useQuery } from "react-query";
import { getPostApi } from "../../api/Post";
import { postAtom } from "./atom";

export const usePostEffect = (id: string) => {
  const setPost = useUpdateAtom(postAtom);
  const { data, isSuccess, isLoading, isError, error } = useQuery(
    ["post", id],
    () => getPostApi(id),
    {
      staleTime: 1000,
      onSuccess(res) {
        if (res.data) {
          setPost({
            post: res.data,
            error: "",
          });
        } else {
          setPost({
            post: null,
            error: "오류 : " + res.err,
          });
        }
      },
    }
  );

  return { postData: data, isSuccess, isLoading, isError, error };
};
