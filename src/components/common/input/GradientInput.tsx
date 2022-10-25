import { IGradientIpnut } from "../../../type/input";
import * as S from "./style";

export const GradientInput = ({
  type,
  name,
  placeholder,
  onChange,
  value,
}: IGradientIpnut) => {
  return (
    <S.GradientInput>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        value={value}
      ></input>
    </S.GradientInput>
  );
};
