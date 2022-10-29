import { useAtom } from "jotai";
import { useMutation, useQuery } from "react-query";
import { getCategoryApi } from "../../api/Category";
import { categoryAtom } from "./atom";

export const useCategoryEffect = (id) => {
  const [postsAndLength, setPostsAndLength] = useAtom(categoryAtom);
  const { isSuccess, isLoading, isError, error } = useQuery(
    ["category", id],
    () => getCategoryApi(id, 1),
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
    () => getCategoryApi(id, postsAndLength.page + 1),
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
