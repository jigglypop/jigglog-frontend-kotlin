import { useAtom } from "jotai";
import { useQuery } from "react-query";
import { getTagApi } from "../../api/Tag";
import { TagAtom } from "./atom";

export const useTagEffect = (id) => {
  const [postsAndLength, setPostsAndLength] = useAtom(TagAtom);
  const { isSuccess, isLoading, isError, error } = useQuery(
    ["tag", id],
    () => getTagApi(id),
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

  const getMorePost = async () => {
    const { page, last } = postsAndLength;
    if (page + 1 <= last) {
      const TagResponse = await getTagApi(id);
      if (TagResponse.status === 200) {
        await setPostsAndLength({
          posts: [...postsAndLength.posts, ...TagResponse.data.data],
          page: postsAndLength.page + 1,
          last: postsAndLength.last,
        });
      }
    }
  };

  return { postsAndLength, getMorePost, isSuccess, isLoading, isError, error };
};
