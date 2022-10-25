import React from "react";
import { QueryClient } from "react-query";
import { getTagApi, getTagsApi } from "../../api/Tag";
import Meta from "../../components/common/meta/Meta";
import { useTagEffect } from "../../store/tag/query";
import { toJson } from "../../util/toJson";
import { getCategoriesApi } from "../../api/Category";
import { useAtomValue } from "jotai";
import { tagsAtom } from "../../store/tags/atom";
import CategoryAndTag from "../../components/category/CategoryAndTag";
import Spinner from "../../components/common/spinner/Spinner";
import NotFound from "../../components/common/notfound/NotFound";

export default function TagPage({ id }) {
  const tags = useAtomValue(tagsAtom);
  const { postsAndLength, getMorePost, isSuccess, isLoading, isError, error } =
    useTagEffect(id);
  return (
    <>
      <Meta description={"태그 목록"} />
      {isSuccess && postsAndLength.posts && (
        <CategoryAndTag
          posts={postsAndLength.posts}
          categories={tags.tags}
          getMorePost={getMorePost}
          type="tag"
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
  await queryClient.prefetchQuery(["tag", id], () => getTagApi(id));
  await queryClient.prefetchQuery(["categories"], getCategoriesApi);
  await queryClient.prefetchQuery(["tags"], getTagsApi);
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
