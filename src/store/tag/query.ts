import { useAtom } from "jotai";
import { useMutation, useQuery } from "react-query";
import { getTagApi } from "../../api/Tag";
import { TagAtom } from "./atom";

export const useTagEffect = (id) => {
  const [postsAndLength, setPostsAndLength] = useAtom(TagAtom);
  const { isSuccess, isLoading, isError, error } = useQuery(
    ["tag", id],
    () => getTagApi(id, 1),
    {
      onSuccess(res) {
        setPostsAndLength({
          posts: res,
          page: 1,
          last: Math.ceil(res[0].postcount / 8),
          error: "",
        });
      },
      onError(res: Error) {
        setPostsAndLength({
          ...postsAndLength,
          error: "오류 : " + res.message,
        });
      },
    }
  );

  const { mutate: fetchCategory, isLoading: isFetchLoading } = useMutation(
    () => getTagApi(id, postsAndLength.page + 1),
    {
      onSuccess(res) {
        setPostsAndLength({
          posts: [...postsAndLength.posts, ...res],
          page: postsAndLength.page + 1,
          last: postsAndLength.last,
          error: "",
        });
      },
      onError(res: Error) {
        setPostsAndLength({
          ...postsAndLength,
          error: "오류 : " + res.message,
        });
      },
    }
  );

  const getMorePost = async () => {
    const { page, last } = postsAndLength;
    if (page + 1 <= last) {
      fetchCategory();
    }
  };
  return { postsAndLength, getMorePost, isSuccess, isLoading, isError, error };
};
