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
      onSuccess(result) {
        if (result.data && result.data.data) {
          setPostsAndLength({
            posts: result.data.data,
            page: 1,
            last: Math.ceil(result.data.data[0].postcount / 8),
          });
        }
      },
    }
  );

  const { mutate: fetchCategory, isLoading: isFetchLoading } = useMutation(
    () => getCategoryApi(id, postsAndLength.page + 1),
    {
      onSuccess(res) {
        setPostsAndLength({
          posts: [...postsAndLength.posts, ...res.data.data],
          page: postsAndLength.page + 1,
          last: postsAndLength.last,
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
