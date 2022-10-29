import { useAtom } from "jotai";
import { useMutation } from "react-query";
import { getTagsApi } from "../../api/Tag";
import { tagsAtom } from "./atom";

export function useTagsActions() {
  const [tags, setTags] = useAtom(tagsAtom);
  const { mutate, isLoading, isError, error } = useMutation(getTagsApi, {
    onSuccess(res) {
      setTags({
        ...tags,
        tags: res,
      });
    },
    onError(res: Error) {
      setTags({
        ...tags,
        error: "오류 : " + res.message,
      });
    },
  });
  return {
    getTags: mutate,
  };
}
