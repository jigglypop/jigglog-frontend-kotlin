import React, { useEffect, useState } from "react";
import { AiOutlineLink } from "react-icons/ai";
import * as S from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { createToast } from "../../../util/toast";

const CopyButton = () => {
  const onClick = () => {
    createToast("링크 복사");
  };
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  }, []);
  return (
    <CopyToClipboard text={url}>
      <S.LinkButton onClick={onClick}>
        <AiOutlineLink className="link-inner" />
      </S.LinkButton>
    </CopyToClipboard>
  );
};
export default CopyButton;
