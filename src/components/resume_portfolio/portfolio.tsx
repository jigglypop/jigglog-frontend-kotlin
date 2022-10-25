import matter from "gray-matter";
import React from "react";
import { IPortfolio } from "../../type/portfolio";
import Carousel from "../common/carousel";
import { GradientText } from "../common/text/Text";
import Markdown from "../post/Markdown/Markdown";
import * as S from "./style";

export interface IPortfolioC {
  portfolio: IPortfolio;
}

export default function Portfolio({ portfolio }: IPortfolioC) {
  const info = matter(portfolio.content);
  return (
    <S.RPWrapper>
      <S.RPInnerWrapper>
        <S.Title>
          <GradientText className="portfolio-title">
            {portfolio.title}
          </GradientText>
          <a href={portfolio.site}>
            <GradientText className="portfolio-url">
              {portfolio.site}
            </GradientText>
          </a>
        </S.Title>
        <S.Carousel>
          <Carousel imageUrls={portfolio.imageurls} />
        </S.Carousel>

        <S.RPPostContent>
          <Markdown content={info.content} />
        </S.RPPostContent>
      </S.RPInnerWrapper>
    </S.RPWrapper>
  );
}
