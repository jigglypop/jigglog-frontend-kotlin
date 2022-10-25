import { IGradientIpnut } from "../../../type/input";
import * as S from "./style";

export const BoxInput = ({
  type,
  name,
  placeholder,
  onChange,
  fontSize,
  value,
}: IGradientIpnut) => {
  return (
    <S.BoxInput fontSize={fontSize}>
      <input
        type={type}
        name={name}
        defaultValue={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
      ></input>
    </S.BoxInput>
  );
};
