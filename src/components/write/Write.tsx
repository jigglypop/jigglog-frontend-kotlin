import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import matter from "gray-matter";
import * as S from "./style";
import dynamic from "next/dynamic";
import { BoxInput } from "../common/input/BoxInput";
import { useWriteActions } from "../../store/write/Write";
import { patchUpdateApi, uploadApi } from "../../api/Post";
import { GradientButton } from "../common/button/GradientButton";
import { useRouter } from "next/router";
import Markdown from "../post/Markdown/Markdown";
import { createToast } from "../../util/toast";
import cache from "../../util/cache";
import useInterval from "../../util/interval";
import { useMutation } from "react-query";
import { useCategoriesActions } from "../../store/categories/query";
import { useAtom, useAtomValue } from "jotai";
import { writeUpdateTypeAtom } from "../../store/write/atom";
import { ColorButton } from "../common/button/style";
import { postAtom } from "../../store/post/atom";
import { useIsOwnerEffect } from "../../store/user/query";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function Write() {
  useIsOwnerEffect();
  const [value, setValue] = useState("");
  const [visibleMD, setVisibleMD] = useState(true);
  const {
    writeform,
    resetWriteForm,
    // changeTags,
    changeform,
    changeformAndName,
    changeforms,
    writeApi,
    setCacheForm,
  } = useWriteActions();
  const post = useAtomValue(postAtom);
  const { categories, getCategories } = useCategoriesActions();
  const [writeUpdateType, setWriteUpdateType] = useAtom(writeUpdateTypeAtom);

  // update인지 write인지 세팅
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (id && post && post.post) {
      setWriteUpdateType({
        type: "update",
        id: parseInt(id as string),
      });
      changeforms({
        title: post.post.title,
        summary: post.post.summary,
        content: post.post.content,
      });
    } else {
      setWriteUpdateType({
        ...writeUpdateType,
        type: "write",
      });
    }
  }, [id, post]);

  useEffect(() => {
    return () => {
      setWriteUpdateType({
        type: "",
        id: -1,
      });
      resetWriteForm();
    };
  }, []);

  // useref
  const uploadNameRef = useRef<HTMLInputElement>(null);
  // usemutation
  const { mutate: writeSubmit } = useMutation(writeApi, {
    onSuccess(res) {
      getCategories();
      router.push(`/post/${res.id}`).then(() => createToast("글쓰기"));
    },
    onError(err: Error) {
      console.log(err);
    },
  });
  const { mutate: updateSubmit } = useMutation(
    () =>
      patchUpdateApi(writeUpdateType.id, {
        title: writeform.title,
        summary: writeform.summary,
        content: writeform.content,
      }),
    {
      onSuccess() {
        getCategories();
        router
          .push(`/post/${writeUpdateType.id}`)
          .then(() => createToast("글 수정"));
      },
    }
  );
  const uploadMutaion = useMutation(uploadApi, {
    onSuccess(data) {
      changeformAndName(data.data.location, "images");
      uploadNameRef.current.value = data.data.originalname;
    },
  });

  useEffect(() => {
    setCacheForm(cache.get("write"));
  }, []);
  useEffect(() => {
    if (post.post) {
      setValue(post.post.content);
    }
  }, [post]);

  useInterval(savePost, 30000);
  function savePost() {
    cache.set("write", writeform);
    createToast("글 저장");
  }

  const setChangeContentValue = (e: string) => {
    const info = matter(e);
    setValue(info.content);
    changeformAndName(info.content, "content");
  };

  const changeImages = (e: ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    uploadMutaion.mutate(formData);
  };

  const onClickVisibleMd = () => {
    setVisibleMD(!visibleMD);
  };

  return (
    <S.Write>
      <S.EditorStyle visible={visibleMD}>
        <BoxInput
          placeholder={"제목을 입력하세요"}
          name={"title"}
          fontSize={"3rem"}
          value={writeform.title}
          onChange={changeform}
        />
        <BoxInput
          placeholder={"한줄 요약을 입력하세요"}
          name={"summary"}
          value={writeform.summary}
          onChange={changeform}
        />
        {writeUpdateType.type === "write" && (
          <>
            <h1>{writeform.category_title}</h1>
            <BoxInput
              placeholder={"카테고리"}
              name={"category_title"}
              value={writeform.category_title}
              onChange={changeform}
            />
            <div className="category-wrapper">
              {categories.categories.map((category: any) => {
                return (
                  <p
                    className="category-small"
                    onClick={() =>
                      changeformAndName(category.title, "category_title")
                    }
                  >
                    #{category.title}
                  </p>
                );
              })}
            </div>
          </>
        )}
        {writeUpdateType.type === "write" && (
          <BoxInput
            placeholder={"태그 입력 (#으로 분리)"}
            name={"tags"}
            value={writeform.tags}
            onChange={changeform}
          />
        )}
        {writeUpdateType.type === "write" && (
          <S.ImageInput>
            <input className="upload-name" ref={uploadNameRef} />
            <label htmlFor="ex_filename">타이틀 이미지 업로드</label>
            <input
              type="file"
              id="ex_filename"
              className="upload-hidden"
              name="img"
              onChange={changeImages}
            />
          </S.ImageInput>
        )}
        <ColorButton onClick={onClickVisibleMd} width="8rem">
          <p>{visibleMD ? "미리보기 숨기기" : "미리보기 열기"}</p>
        </ColorButton>
        <MDEditor
          height={700}
          tabSize={5}
          preview="edit"
          value={writeform.content}
          onChange={(e) => setChangeContentValue(e)}
        />
        <GradientButton
          onClick={
            writeUpdateType.type === "write" ? writeSubmit : updateSubmit
          }
        >
          <p>제출하기</p>
        </GradientButton>
      </S.EditorStyle>
      {visibleMD && (
        <S.WriteMarkdown>
          <Markdown content={value} />
        </S.WriteMarkdown>
      )}
    </S.Write>
  );
}
