import React from "react";
import { modalAtom } from "../../store/modal/atom";
import Modal from "../common/modal/Modal";
import * as S from "./style";
import { useAtomValue } from "jotai";
import { userAtom } from "../../store/user/atom";
import { ColorButton } from "../common/button/ColorButton";
import { useDeleteActions } from "../../store/delete/query";
import { useCategoriesActions } from "../../store/categories/query";
import { useUpdateAtom } from "jotai/utils";

export default function Delete() {
  const setModal = useUpdateAtom(modalAtom);
  const user = useAtomValue(userAtom);
  const deleteActions = useDeleteActions();
  const categoriesActions = useCategoriesActions();
  const { deletePost } = deleteActions;
  const { getCategories } = categoriesActions;

  const onClickCancel = () => {
    setModal({
      on: false,
      type: "login",
    });
  };

  const onDelete = () => {
    deletePost();
    getCategories();
  };

  return (
    <Modal>
      <S.Delete>
        <div className="upper">
          <p className="delete-text">포스트를 정말 삭제하시겠습니까?</p>
        </div>
        <div className="under">
          <ColorButton
            color={"white"}
            onClick={onClickCancel}
            fontColor={"black"}
          >
            <p>취소</p>
          </ColorButton>
          <ColorButton color={"#ffc0c0"} fontColor={"black"} onClick={onDelete}>
            <p>삭제</p>
          </ColorButton>
        </div>
      </S.Delete>
    </Modal>
  );
}
