import { useEffect, useRef, useState } from "react";
import { IAvatarIcon } from "../../../type/Icon";
import * as S from "./style";
import * as _ from "lodash";
import { $ } from "../../../util/JQuery";
import Link from "next/link";

export const AvatarIcon = ({ children, username, onLogout }: IAvatarIcon) => {
  const [isHover, setIsHover] = useState(false);
  const iconRef = useRef(null);
  const tooltipRef = useRef(null);

  const OverEvent = () => {
    setIsHover(true);
  };

  const OutEvent = () => {
    setIsHover(false);
  };

  useEffect(() => {
    $(iconRef.current).on("mouseover", OverEvent);
    $(tooltipRef.current).on("mouseover", OverEvent);

    $(iconRef.current).on("mouseout", OutEvent);
    $(tooltipRef.current).on("mouseout", OutEvent);

    return () => {
      $(iconRef.current).remove("mouseover", OverEvent);
      $(tooltipRef.current).remove("mouseover", OverEvent);

      $(iconRef.current).remove("mouseout", OutEvent);
      $(tooltipRef.current).remove("mouseout", OutEvent);
    };
  }, []);

  return (
    <S.GradientIconOuter>
      <S.GradientIcon className="Avatar-icon" ref={iconRef}>
        {children}
        <S.GradientBorder isHover={isHover}></S.GradientBorder>
      </S.GradientIcon>
      <S.AvatarToolTip isHover={isHover} ref={tooltipRef}>
        <p className="tooltip-item username-tooltip">{username}</p>
        <Link href="/write">
          <p className="tooltip-item write-tooltip">글쓰기</p>
        </Link>
        <p className="tooltip-item logout-tooltip" onClick={onLogout}>
          로그아웃
        </p>
      </S.AvatarToolTip>
    </S.GradientIconOuter>
  );
};
