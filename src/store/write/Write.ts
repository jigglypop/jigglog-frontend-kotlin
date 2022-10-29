import { postWriteApi } from "../../api/Post";
import { useAtom, WritableAtom } from "jotai";
import {
  IChangeForm,
  IChangeFormAndName,
  IChangeForms,
  ISetCacheForm,
  IWriteFormAtom,
} from "./type";
import { writeFormAtom } from "./atom";
import { useResetAtom } from "jotai/utils";

export function useWriteActions() {
  const [writeform, setWriteForm] = useAtom(writeFormAtom);
  const resetWriteForm = useResetAtom(
    writeFormAtom as unknown as WritableAtom<IWriteFormAtom, symbol, void>
  );

  const changeform: IChangeForm = (e) => {
    setWriteForm({
      ...writeform,
      [e.target.name]: e.target.value,
    });
  };

  // const changeTags: IChangeTags = (e) => {
  //   const tagArray = e.target.value
  //     .split("#")
  //     .filter((item: string) => item !== "");
  //   setWriteForm({ ...writeform, ["tags"]: tagArray });
  // };

  const changeformAndName: IChangeFormAndName = (value, name) => {
    setWriteForm({ ...writeform, [name]: value });
  };

  const changeforms: IChangeForms = ({ title, summary, content }) => {
    setWriteForm({
      ...writeform,
      title: title,
      summary: summary,
      content: content,
    });
  };

  const getform = () => {
    return writeform;
  };

  const setCacheForm: ISetCacheForm = (form) => {
    setWriteForm({ ...form });
  };

  const writeApi = async () => {
    const { data } = await postWriteApi(writeform);
    return data;
  };

  return {
    writeform,
    writeApi,
    getform,
    setCacheForm,
    setWriteForm,
    changeform,
    changeforms,
    resetWriteForm,
    changeformAndName,
    // changeTags,
  };
}
