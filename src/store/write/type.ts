export type IForm = {
  title: string;
  summary: string;
  content: string;
  images: string;
  user: string;
  category_title: string;
  tags: string[];
};

export type IWriteFormAtom = IForm;
export type IWriteUpdateTypeAtom = {
  type: string;
  id: number;
};
export type IWriteForm = {
  target: {
    name: string;
    value: string;
  };
};

export type IChangeForm = (e: IWriteForm) => void;
export type IChangeTags = (e: IWriteForm) => void;
export type IChangeFormAndName = <T>(value: T, name: string) => void;
export type IChangeForms = ({
  title,
  summary,
  content,
}: Pick<IForm, "title" | "summary" | "content">) => void;
export type ISetCacheForm = (form: IForm) => void;
