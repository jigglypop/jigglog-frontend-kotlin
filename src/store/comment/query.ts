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
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { postAtom } from "../post/atom";
import { UseMutateFunction, useMutation } from "react-query";
import { WritableAtom } from "jotai";
import { useResetAtom } from "jotai/utils";
import { useEffect } from "react";
import { commentFormAtom, commentsAtom, commentsOpenAtom } from "./atom";
import { ICommentsAtom, ICommentsFormAtom, ICommentsOpenAtom } from "./type";
import { userAtom } from "../user/atom";
import { loginFormAtom } from "../login/atom";
import { registerFormAtom } from "../register/atom";

export type IUseCommentActions = {
  type: string;
  register: () => Promise<void>;
};

export const useCommentActions = () => {
  const [commentform, setCommentForm] = useAtom(commentFormAtom);
  const [comments, setComments] = useAtom(commentsAtom);
  const [openId, setOpenId] = useAtom(commentsOpenAtom);
  const post = useAtomValue(postAtom);
  const user = useAtomValue(userAtom);
  const setLoginForm = useSetAtom(loginFormAtom);
  const [registerform, setRegisterForm] = useAtom(registerFormAtom);

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
    () => postCommentsApi(post.post.id, commentform),
    {
      onSuccess() {
        createToast("댓글 등록");
        getComments(post.post.id);
        setCommentForm({
          content: "",
        });
        const textArea: any = $(".writecomment-textarea").get();
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
        getComments(post.post.id);
        setCommentForm({
          content: "",
        });
        const textArea: any = $(".writecomment-textarea").get();
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
        getComments(post.post.id);
      },
    }
  );

  const { mutate: onGoRemoveComment } = useMutation(
    (recommentId: number) => deleteCommentsApi(recommentId),
    {
      onSuccess() {
        createToast("댓글 삭제");
        getComments(post.post.id);
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
