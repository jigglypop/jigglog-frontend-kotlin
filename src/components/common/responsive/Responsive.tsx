import React, { useEffect } from "react";
import * as S from "./style";

export default function Responsive({ children, ...rest }) {
    return <S.ResponsiveBlock {...rest}>{children}</S.ResponsiveBlock>;
}
