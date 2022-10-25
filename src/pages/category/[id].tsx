import { useAtomValue } from "jotai";
import React from "react";
import { QueryClient } from "react-query";
import { getCategoriesApi, getCategoryApi } from "../../api/Category";
import CategoryAndTag from "../../components/category/CategoryAndTag";
import Meta from "../../components/common/meta/Meta";
import NotFound from "../../components/common/notfound/NotFound";
import Spinner from "../../components/common/spinner/Spinner";
import { categoriesAtom } from "../../store/categories/atom";
import { useCategoryEffect } from "../../store/category/query";
import { toJson } from "../../util/toJson";

export default function CategoryPage({ id }) {
  const categories = useAtomValue(categoriesAtom);
  const { postsAndLength, getMorePost, isSuccess, isLoading, isError, error } =
    useCategoryEffect(id);
  return (
    <>
      <Meta description={"카테고리 목록"} />
      {isSuccess && postsAndLength.posts && (
        <CategoryAndTag
          posts={postsAndLength.posts}
          categories={categories.categories}
          getMorePost={getMorePost}
          type="category"
        />
      )}
      {isLoading && <Spinner />}
      {isError && <NotFound />}
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const queryClient = new QueryClient();
  const page = 1;
  await queryClient.prefetchQuery(["category", id], () =>
    getCategoryApi(id, page)
  );
  await queryClient.prefetchQuery(["categories"], getCategoriesApi);
  return {
    props: {
      dehydratedState: toJson(queryClient),
      id: id,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
