import { IComments } from "../../../type/comment";

export interface ICommentItem {
  comment: IComments;
  type: "comment" | "recomment";
}
