import { useAtom } from "jotai";
import { getTagsApi } from "../../api/Tag";
import { tagsAtom } from "./atom";

export function useTagsActions() {
  const [tags, setTags] = useAtom(tagsAtom);
  const getTags = async () => {
    const tagsResponse = await getTagsApi();
    if (tagsResponse.status === 200) {
      setTags({
        error: "",
        tags: [
          ...tagsResponse.data.filter(
            (category) => category.title !== "resume"
          ),
        ],
      });
    } else {
      setTags({
        ...tags,
        error: tagsResponse.err,
      });
    }
  };

  return {
    getTags,
  };
}
