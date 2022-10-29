import Meta from "../../components/common/meta/Meta";
import { usePostEffect } from "../../store/post/query";
import Post from "../../components/post/Post";
import * as S from "../../components/post/style";
import { useCommentEffect } from "../../store/comment/query";
import { useCommentActions } from "../../store/comment/query";
import { QueryClient } from "react-query";
import { getPostApi } from "../../api/Post";
import { toJson } from "../../util/toJson";
import { getCategoriesApi } from "../../api/Category";
import Spinner from "../../components/common/spinner/Spinner";
import NotFound from "../../components/common/notfound/NotFound";
import { useAtom } from "jotai";
import { postAtom } from "../../store/post/atom";

function PostPage({ id }) {
  const { getComments } = useCommentActions();
  const { postData, isSuccess, isLoading, error } = usePostEffect(id);
  const [post] = useAtom(postAtom);
  useCommentEffect(getComments, postData);
  return (
    <S.PostPage>
      {isSuccess && (
        <>
          <Meta description={postData?.title + " | " + postData?.summary} />
          <Post post={postData} />
        </>
      )}
      {isLoading && <Spinner />}
      {error && <NotFound error={post.error} />}
    </S.PostPage>
  );
}

export const getServerSideProps = async ({ params }) => {
  const id = params?.id as string;
  const queryClient = new QueryClient();
  await Promise.all([
    queryClient.prefetchQuery(["post", id], () => getPostApi(id)),
    queryClient.prefetchQuery(["categories"], getCategoriesApi),
  ]);
  return {
    props: {
      dehydratedState: toJson(queryClient),
      id: id,
    },
  };
};

export default PostPage;
