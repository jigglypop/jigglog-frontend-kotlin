import matter from "gray-matter";
import React from "react";
import { IPost } from "../../type/post";
import Avatar from "../common/avatar/Avatar";
import { GradientText } from "../common/text/Text";
import Markdown from "../post/Markdown/Markdown";
import * as S from "./style";

export interface IResumeC {
  resume: IPost;
}

export default function Resume({ resume }: IResumeC) {
  const info = matter(resume.content);

  return (
    <S.RPWrapper>
      <S.RPInnerWrapper>
        <S.User>
          <Avatar
            width={"20rem"}
            height={"20rem"}
            imageUrl={resume.user.imageUrl}
            boxShadow={"2px 2px 10px white"}
            className={"manager"}
          />
          <GradientText>{resume.user.username}</GradientText>
        </S.User>
        <S.SocialInformation></S.SocialInformation>
        <S.PostContent>
          <Markdown content={info.content} />
        </S.PostContent>
      </S.RPInnerWrapper>
    </S.RPWrapper>
  );
}
