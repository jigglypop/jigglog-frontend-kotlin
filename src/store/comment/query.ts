import { ChangeEvent, useCallback } from "react";
import {
  deleteCommentsApi,
  getCommentsApi,
  postCommentsApi,
} from "../../api/Comment";
import { deleteRecommentsApi, postRecommentsApi } from "../../api/Recomment";
import { createToast } from "../../util/toast";
import { debounce } from "lodash";
import { $ } from "../../util/JQuery";
import { useAtom, useAtomValue } from "jotai";
import { postAtom } from "../post/atom";
import { UseMutateFunction, useMutation } from "react-query";
import { WritableAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { commentFormAtom, commentsAtom, commentsOpenAtom } from "./atom";
import { ICommentsAtom, ICommentsFormAtom, ICommentsOpenAtom } from "./type";
import { userAtom } from "../user/atom";
import { useRouter } from "next/router";

export type IUseCommentActions = {
  type: string;
  register: () => Promise<void>;
};

export const useCommentActions = () => {
  const [commentform, setCommentForm] = useAtom(commentFormAtom);
  const [comments, setComments] = useAtom(commentsAtom);
  const [openId, setOpenId] = useAtom(commentsOpenAtom);
  const user = useAtomValue(userAtom);
  // 현재 파라미터
  const router = useRouter();

  const { mutate: getComments } = useMutation(getCommentsApi, {
    onSuccess(res) {
      setComments({
        error: "",
        comments: res,
      });
    },
    onError(res: Error) {
      setComments({
        ...comments,
        error: res.message,
      });
    },
  });

  const setOpen = (_openId: ICommentsOpenAtom) => {
    if (_openId.openId === (openId as ICommentsOpenAtom).openId) {
      setOpenId({ openId: 0 });
    } else {
      setOpenId(_openId);
    }
  };

  const onChangeComment = useCallback(
    debounce((e: ChangeEvent<HTMLTextAreaElement>) => {
      setCommentForm({
        ...commentform,
        [e.target.name]: e.target.value,
      });
    }, 500),
    []
  );

  // comment 집어넣기
  const { mutate: onSubmitComment } = useMutation(
    () => {
      return postCommentsApi(
        parseInt(router?.query?.id as string),
        commentform
      );
    },
    {
      onSuccess() {
        createToast("댓글 등록");
        getComments(parseInt(router?.query?.id as string));
        setCommentForm({
          content: "",
        });
        const textArea = $(".writecomment-textarea").get() as HTMLInputElement;
        textArea.value = "";
      },
      onError(res: { message: string }) {
        setComments({
          ...comments,
          error: res.message,
        });
      },
    }
  );

  const { mutate: onSubmitRecomment } = useMutation(
    () => postRecommentsApi(openId.openId, commentform),
    {
      onSuccess() {
        createToast("대댓글 등록");
        getComments(parseInt(router?.query?.id as string));
        setCommentForm({
          content: "",
        });
        const textArea = $(".writecomment-textarea").get() as HTMLInputElement;
        textArea.value = "";
      },
      onError(res: { message: string }) {
        setComments({
          ...comments,
          error: res.message,
        });
      },
    }
  );

  const { mutate: onGoRemoveRecomment } = useMutation(
    (commentId: number) => deleteRecommentsApi(commentId),
    {
      onSuccess() {
        createToast("대댓글 삭제");
        getComments(parseInt(router?.query?.id as string));
      },
    }
  );

  const { mutate: onGoRemoveComment } = useMutation(
    (recommentId: number) => deleteCommentsApi(recommentId),
    {
      onSuccess() {
        createToast("댓글 삭제");
        getComments(parseInt(router?.query?.id as string));
      },
    }
  );

  return {
    error: comments.error,
    comments: comments.comments,
    commentform,
    openId,
    user,
    setOpen,
    getComments,
    onChangeComment,
    onSubmitComment,
    onSubmitRecomment,
    onGoRemoveComment,
    onGoRemoveRecomment,
  };
};

export function useCommentEffect(
  getComments: UseMutateFunction<any, { message: string }, number, unknown>,
  post: any
) {
  const setCommentForm = useResetAtom(
    commentFormAtom as unknown as WritableAtom<ICommentsFormAtom, symbol, void>
  );
  const setComments = useResetAtom(
    commentsAtom as unknown as WritableAtom<ICommentsAtom, symbol, void>
  );
  const setOpenId = useResetAtom(
    commentsOpenAtom as unknown as WritableAtom<ICommentsOpenAtom, symbol, void>
  );
  useEffect(() => {
    if (post) {
      getComments(post.id);
    }
  }, [post]);

  useEffect(() => {
    return () => {
      setCommentForm();
      setComments();
      setOpenId();
    };
  }, []);
  return {};
}
