import { useEffect, useState } from "react";
import PrintButton from "../../common/PrintButton";
import CopyButton from "./CopyButton";
import KakaoShareButton from "./KakaoShareButton";
import { MdFormatColorText, MdTexture } from "react-icons/md";
import { ImTextColor } from "react-icons/im";
import * as S from "./style";
import { GradientIcon } from "../../common/icon/GradientIcon";
import IsOwner from "../../common/isOwner/isOwner";
import { $$ } from "../../../util/JQuery";
import { IPostButtons } from "./type";

export default function Buttons({ post }: IPostButtons) {
  // 답
  const [codes, setCodes] = useState(false);
  const [ems, setEms] = useState(false);
  const [dels, setDels] = useState(false);

  const toggleCodes = () => {
    setCodes(!codes);
  };

  const toggleEms = () => {
    setEms(!ems);
  };

  const toggleDels = () => {
    setDels(!dels);
  };

  // 마크다운 색 바꾸기
  useEffect(() => {
    $$("em").css("visibility", ems ? "hidden" : "visible");
    $$("code").css("visibility", codes ? "hidden" : "visible");
    $$("del").css("visibility", dels ? "hidden" : "visible");
  }, [codes, ems, dels]);

  return (
    <S.Visible>
      <IsOwner>
        <S.WarpVisible>
          <GradientIcon
            onClick={toggleCodes}
            className="link-outer color"
            id="answer"
            text="코드 토글"
          >
            <S.defaultButton>
              <MdTexture className="link-inner default-icon" />
            </S.defaultButton>
          </GradientIcon>

          <GradientIcon
            onClick={toggleEms}
            className="link-outer color"
            id="lines"
            text="밑줄 토글"
          >
            <S.defaultButton>
              <MdFormatColorText className="link-inner default-icon" />
            </S.defaultButton>
          </GradientIcon>

          <GradientIcon
            onClick={toggleDels}
            className="link-outer"
            id="dels"
            text="라인 블록"
          >
            <S.defaultButton>
              <ImTextColor className="link-inner default-icon" />
            </S.defaultButton>
          </GradientIcon>
        </S.WarpVisible>
      </IsOwner>

      <S.WarpVisibleUnder>
        <GradientIcon text="카카오톡 공유">
          <KakaoShareButton title={post.title} image={post.images} />
        </GradientIcon>
        <GradientIcon text="URL주소 복사">
          <CopyButton />
        </GradientIcon>
        <GradientIcon text="글전체 프린트">
          <PrintButton />
        </GradientIcon>
      </S.WarpVisibleUnder>
    </S.Visible>
  );
}
