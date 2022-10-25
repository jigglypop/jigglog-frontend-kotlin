import React from "react";
import { IPost } from "../../type/post";
import * as S from "./style";
import PostItem from "../posts/PostItem";
import { GradientText } from "../common/text/Text";
import { useRouter } from "next/router";
import Link from "next/link";
import { ICategoryTag } from "../../type/category";
import InfiniteScroll from "react-infinite-scroll-component";
import { ICategoryItem } from "./type";

export default function CategoryAndTag({
  posts,
  categories,
  type,
  getMorePost,
}: ICategoryItem) {
  const router = useRouter();
  return (
    <S.CategoryOuter>
      <S.CategoryTop>
        <div className="category-left">
          <GradientText className="category-title">
            {type === "category" ? "카테고리" : "태그"}
          </GradientText>
          <GradientText className="category-name">
            {
              categories.filter(
                (category: ICategoryTag) =>
                  category.id.toString() === router.query.id
              )[0]?.title
            }
          </GradientText>
        </div>
        <div className="category-right">
          {categories.map((category: ICategoryTag) => (
            <Link
              href={
                type === "category"
                  ? `/category/${category.id}`
                  : `/tag/${category.id}`
              }
              key={category.id}
            >
              <GradientText className="category-item">
                {type === "category" ? " $" : " #"}
                {category.title}
              </GradientText>
            </Link>
          ))}
        </div>
      </S.CategoryTop>
      <S.CategoryWrapper>
        <InfiniteScroll
          dataLength={posts.length}
          next={getMorePost}
          hasMore={true}
          loader={<h3></h3>}
          endMessage={<h4></h4>}
          className="infinite-scroll"
        >
          {posts &&
            posts.map((post: IPost) => <PostItem post={post} key={post.id} />)}
        </InfiniteScroll>
      </S.CategoryWrapper>
    </S.CategoryOuter>
  );
}
