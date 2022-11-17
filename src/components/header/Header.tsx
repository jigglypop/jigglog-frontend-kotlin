import React, { useEffect, useState } from "react";
import * as S from "./style";
import { RiFileUserLine, RiMoonClearLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgFileDocument } from "react-icons/cg";
import { HiOutlineDocumentReport } from "react-icons/hi";
import Link from "next/link";
import { modalAtom } from "../../store/modal/atom";
import { $ } from "../../util/JQuery";
import * as _ from "lodash";
import { GradientIcon } from "../common/icon/GradientIcon";
import { ICategory } from "../../type/category";
import Avatar from "../common/avatar/Avatar";
import { AvatarIcon } from "../common/icon/AvatarIcon";
import { GradientText } from "../common/text/Text";
import { useRouter } from "next/router";
import { COLORS, COLORSLIGHT } from "../../constants/constants";
import { useAtomValue } from "jotai";
import { categoriesAtom } from "../../store/categories/atom";
import { userAtom } from "../../store/user/atom";
import { useUserActions } from "../../store/user/query";
import { useUpdateAtom } from "jotai/utils";
import { useTagsActions } from "../../store/tags/query";

export default function Header() {
  const [isLeft, setIsLeft] = useState(false);
  const setModal = useUpdateAtom(modalAtom);
  const user = useAtomValue(userAtom);
  const categories = useAtomValue(categoriesAtom);
  const { getTags } = useTagsActions();
  const { logout } = useUserActions();
  const router = useRouter();

  const setModalAndInit = () => {
    setModal({
      on: true,
      type: "login",
    });
  };

  const OpenLeft = () => {
    setIsLeft(true);
  };

  const toggleLeft = () => {
    setIsLeft(!isLeft);
  };

  const hambergerUp = _.debounce(OpenLeft, 100);
  const isOutside = _.debounce((e) => {
    if (
      !e.target?.closest(".slider-all") &&
      !e.target?.closest(".GiHamburgerMenu")
    ) {
      setIsLeft(false);
    }
  }, 200);

  useEffect(() => {
    getTags();
    document.addEventListener("mouseover", isOutside);
    return () => {
      document.removeEventListener("mouseover", isOutside);
    };
  }, []);

  useEffect(() => {
    if (router.pathname.split("/")[1] === "post") {
      $(".slider-all").css("boxShadow", "");
    }
  }, [router]);

  const onPush = (url: string) => {
    router.push(url);
  };

  return (
    <div>
      <S.Header isLeft={isLeft}>
        <S.HeaderInner>
          <div>
            <GiHamburgerMenu
              className="header-icon GiHamburgerMenu"
              onClick={() => toggleLeft()}
              onMouseEnter={(e) => hambergerUp(e)}
            />
          </div>
          <Link href="/">
            <RiMoonClearLine className="header-icon RiMoonClearLine" />
          </Link>
          <p className="header-jigglog">JIGGLOG</p>
        </S.HeaderInner>
        <S.HeaderInner>
          {user && user.user ? (
            <AvatarIcon username={user.user.username} onLogout={logout}>
              <Avatar
                width={"4rem"}
                height={"4rem"}
                imageUrl={user.user.imageUrl}
                boxShadow={"2px 2px 10px white"}
                className={"manager"}
              />
            </AvatarIcon>
          ) : (
            <GradientIcon text={"로그인"}>
              <RiFileUserLine
                className="header-icon RiFileUserLine"
                onClick={() => setModalAndInit()}
              />
            </GradientIcon>
          )}

          <GradientIcon
            text={"포트폴리오"}
            onClick={() => onPush("/portfolios")}
            className="header-portfolio-button"
          >
            <CgFileDocument className="header-icon CgFileDocument" />
          </GradientIcon>
          <GradientIcon
            text={"이력서"}
            onClick={() => onPush("/resume")}
            className="header-resume-button"
          >
            <HiOutlineDocumentReport className="header-icon HiOutlineDocumentReport" />
          </GradientIcon>
        </S.HeaderInner>
      </S.Header>
      <S.SideBar isLeft={isLeft} className="slider-all">
        <GradientText className="category-title">카테고리</GradientText>
        {categories.categories.map((category: ICategory, i: number) => (
          <S.SideBarItem
            color={COLORSLIGHT[i % 10]}
            key={category.id}
            onClick={() => onPush(`/category/${category.id}`)}
            className={`sidebar-category-${category.id}-button`}
          >
            <div className="sidebar-item sidebar-box">{category.posts}</div>
            <div className="sidebar-item">
              <p>{category.title}</p>
            </div>
          </S.SideBarItem>
        ))}
      </S.SideBar>
    </div>
  );
}
