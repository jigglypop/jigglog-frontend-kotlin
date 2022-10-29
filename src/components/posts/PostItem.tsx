import React from "react";
import * as S from "./style";
import Link from "next/link";
import { GradientText } from "../common/text/Text";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Avatar from "../common/avatar/Avatar";
import { IPostItem } from "./type";

export default function PostItem({ post }: IPostItem) {
  return (
    <Link href={`/post/${post.id}`}>
      <S.PostItem>
        <img src={post.images}></img>
        <div className="title">
          <GradientText className="postitem-title">{post.title}</GradientText>
          <p className="postitem-summary">
            {post.summary.slice(0, 30) + "..."}
          </p>
        </div>
        <div className="under-left">
          <AiOutlineMessage className="under-item" />
          <p className="under-text">{post.commentcount}</p>
          <AiFillEye className="under-item" />
          <p className="under-text">{post.viewcount}</p>
        </div>
        <div className="under-right">
          {post.tags?.map((tag, _) => (
            <Link href={`/tag/${tag.tag?.id}`} key={tag.tag?.id}>
              <GradientText className="under-tag">
                #{tag.tag?.title}
              </GradientText>
            </Link>
          ))}
          <Avatar
            width={"3rem"}
            height={"3rem"}
            imageUrl={post.user.imageUrl}
          />
        </div>
      </S.PostItem>
    </Link>
  );
}
