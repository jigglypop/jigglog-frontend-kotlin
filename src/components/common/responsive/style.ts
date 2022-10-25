import styled from "styled-components";

export const ResponsiveBlock = styled.div`
    width: 1300px;

    @media (max-width: 1024px) {
        width: 768px;
    }

    @media (max-width: 768px) {
        position: relative;
        width: 100vw;
        overflow: hidden;
    }
`;
