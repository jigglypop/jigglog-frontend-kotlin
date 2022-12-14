import { useAtom } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { useQuery } from "react-query";
import { getResumeApi } from "../../api/Resume";
import { resumeAtom } from "./atom";

export function useResumeActions() {
  const [resume, setResume] = useAtom(resumeAtom);

  return {
    resume,
    setResume,
  };
}

export function useResumeEffect() {
  const setResume = useUpdateAtom(resumeAtom);
  const { data, isSuccess, isLoading, isError, error } = useQuery(
    ["resume"],
    () => getResumeApi(),
    {
      onSuccess(res) {
        setResume({
          resume: res,
          error: "",
        });
      },
      onError(res: Error) {
        setResume({
          resume: null,
          error: "오류 : " + res.message,
        });
      },
    }
  );

  return { resume: data, isSuccess, isLoading, isError, error };
}
