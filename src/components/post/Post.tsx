import React, { useEffect } from "react";
import matter from "gray-matter";
import * as S from "./style";
import Markdown from "./Markdown/Markdown";
import Avatar from "../common/avatar/Avatar";
import { dateStringFormat } from "../../util/date";
import { ITagItem } from "../../type/tag";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { GrUpgrade } from "react-icons/gr";
import { GradientIcon } from "../common/icon/GradientIcon";
import Link from "next/link";
import Comments from "../comment/Comment/Comments";
import Toc from "./Toc";
import Buttons from "./Buttons";
import { useAtomValue } from "jotai";
import { useUpdateAtom } from "jotai/utils";
import { userAtom } from "../../store/user/atom";
import { modalAtom } from "../../store/modal/atom";
import { IPostComponent } from "./type";

export default function Post({ post }: IPostComponent) {
  const info = matter(post.content);
  const user = useAtomValue(userAtom);
  const setModal = useUpdateAtom(modalAtom);

  const onDelete = () => {
    setModal({
      on: true,
      type: "delete",
    });
  };

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "white";
    return () => {
      document.querySelector("body").style.backgroundColor = "#111518";
    };
  }, []);

  return (
    <S.Post>
      <S.PostLeft>
        <Buttons post={post} />
      </S.PostLeft>
      <S.MarkdownStyle>
        <p className="post-title">{post.title}</p>
        <div className="post-under">
          <div className="user-profile">
            <Avatar imageUrl={post.user.imageUrl} className={"manager"} />
            <p>{post.user.username}</p>
          </div>
          <div className="user-profile">
            <p>{dateStringFormat(new Date(post.createdAt))}</p>
          </div>
        </div>
        <div className="post-under">
          <div className="post-tags">
            {post &&
              post.tags &&
              post.tags.map((tag: ITagItem) => (
                <Link href={`/tag/${tag.id}`} key={tag.id}>
                  <p className="post-tag" key={tag.id}>
                    #{tag.title}{" "}
                  </p>
                </Link>
              ))}
          </div>
          <div>
            {user.user && user.user.id === 1 && (
              <div className="owner-under">
                <GradientIcon text={"업데이트"} className="owner-outer">
                  <Link href={`/update/${post.id}`}>
                    <GrUpgrade className="owner-item" />
                  </Link>
                </GradientIcon>
                <GradientIcon
                  text={"삭제하기"}
                  className="owner-outer"
                  onClick={onDelete}
                >
                  <RiDeleteBin5Fill className="owner-item" />
                </GradientIcon>
              </div>
            )}
          </div>
        </div>
        <div className="post-width">
          <img className="post-image" src={post.images} />
        </div>

        <Markdown content={info.content} />

        <div className="post-owner">
          <div className="user-profile">
            <Avatar
              width={"80px"}
              height={"80px"}
              imageUrl={post.user.imageUrl}
              className={"manager"}
            />
            <div className="user-summary">
              <h3>{post.user.username}</h3>
              <p>{post.user.email}</p>
            </div>
          </div>
        </div>
        <S.Comments>
          <Comments />
        </S.Comments>
      </S.MarkdownStyle>
      <S.PostRight>
        <Toc />
      </S.PostRight>
    </S.Post>
  );
}
