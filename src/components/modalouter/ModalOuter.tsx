import { useAtomValue } from "jotai";
import * as React from "react";
import { modalAtom } from "../../store/modal/atom";
import Auth from "../auth/Auth";
import Delete from "../delete/Delete";

export default function ModalOuter() {
  const modal = useAtomValue(modalAtom);
  return (
    <>
      {(modal.type === "register" || modal.type === "login") && <Auth />}
      {modal.type === "delete" && <Delete />}
    </>
  );
}
