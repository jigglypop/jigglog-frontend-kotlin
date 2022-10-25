import { useEffect, useRef, useState } from "react";
import { IGradientIcon } from "../../../type/Icon";
import * as S from "./style";
import * as _ from "lodash";
import { $ } from "../../../util/JQuery";

export const GradientIcon = ({
  children,
  text,
  className,
  onClick,
  id,
}: IGradientIcon) => {
  const [isHover, setIsHover] = useState(false);
  const iconRef = useRef(null);

  const OverEvent = () => {
    setIsHover(true);
  };

  const OutEvent = () => {
    setIsHover(false);
  };

  useEffect(() => {
    $(iconRef.current).on("mouseover", OverEvent);
    $(iconRef.current).on("mouseout", OutEvent);
    return () => {
      $(iconRef.current).remove("mouseover", OverEvent);
      $(iconRef.current).remove("mouseout", OutEvent);
    };
  }, []);

  return (
    <S.GradientIconOuter>
      <S.GradientIcon
        className={`gradient-icon ${className ? className : ""}`}
        ref={iconRef}
        onClick={onClick}
        id={id}
      >
        {children}
        <S.GradientBorder isHover={isHover}></S.GradientBorder>
      </S.GradientIcon>
      <S.GradientToolTip isHover={isHover}>
        <p>{text}</p>
      </S.GradientToolTip>
    </S.GradientIconOuter>
  );
};
