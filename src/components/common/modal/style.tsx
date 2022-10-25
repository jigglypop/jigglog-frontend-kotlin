import styled from "styled-components";
import { FlexCenter } from "../../../style/default";
import { IModal } from "../../../type/modal";

export const Modal = styled(FlexCenter)<IModal>`
    ${(props) => (props.modal ? "" : "display: none;")}
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0, 0.8);
    z-index: 10;
`;
