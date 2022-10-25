import React from "react";
import { modalAtom } from "../../../store/modal/atom";
import { useAtomValue } from "jotai";
import * as S from "./style";

export default function Modal({ children }) {
  const modal = useAtomValue(modalAtom);
  return <S.Modal modal={modal.on}>{children}</S.Modal>;
}
