import styled from "styled-components";

type IIsOwner = {
    isOwner: boolean;
};

export const isOwner = styled.div<IIsOwner>`
    position: relative;
    ${(props) => (props.isOwner ? "" : "display: none;")}
`;
