import React from "react";
import { getPostApi } from "../../api/Post";
import Meta from "../../components/common/meta/Meta";
import Write from "../../components/write/Write";
import { usePostEffect } from "../../store/post/query";
import { getCategoriesApi } from "../../api/Category";
import { QueryClient } from "react-query";
import { toJson } from "../../util/toJson";
import Spinner from "../../components/common/spinner/Spinner";
import NotFound from "../../components/common/notfound/NotFound";
import { useAtom } from "jotai";
import { postAtom } from "../../store/post/atom";

function UpdatePage({ id }) {
  const { postData, isSuccess, isLoading } = usePostEffect(id);
  const [post] = useAtom(postAtom);
  return (
    <div>
      {isSuccess && postData.data && (
        <>
          <Meta description={"업데이트 | " + postData.data?.data.title} />
          <Write />
        </>
      )}
      {isLoading && <Spinner />}
      {post.post === null && <NotFound error={post.error} />}
    </div>
  );
}
export const getServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["post"], () => getPostApi(id));
  await queryClient.prefetchQuery(["categories"], getCategoriesApi);
  return {
    props: {
      dehydratedState: toJson(queryClient),
      id: id,
    },
  };
};
export default UpdatePage;
