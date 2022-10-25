import { MdCancel } from "react-icons/md";
import { ICancelButton } from "../button/type";
import * as S from "./style";

export const CancelButton = ({ className, onClick }: ICancelButton) => {
  return (
    <S.CancelButton className={className ? className : ""} onClick={onClick}>
      <MdCancel />
    </S.CancelButton>
  );
};
