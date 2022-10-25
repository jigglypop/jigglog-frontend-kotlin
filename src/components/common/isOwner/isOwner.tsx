import { useAtomValue } from "jotai";
import { userAtom } from "../../../store/user/atom";
import * as S from "./style";

export default function IsOwner({ children }) {
  const user = useAtomValue(userAtom);
  return <S.isOwner isOwner={user?.user?.id === 1}>{children}</S.isOwner>;
}
