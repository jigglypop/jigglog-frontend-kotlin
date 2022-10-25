import styled from "styled-components";

export const PortfoliosWrapper = styled.div`
    position: relative;

    /* 스크롤 */
    .parallax {
        ::-webkit-scrollbar {
            width: 15px;
            background-color: var(--text-white-dark);
        }
        /* 스크롤 엄지부분 */
        ::-webkit-scrollbar-thumb {
            background: var(--header-gradient-picker);
            border-radius: 10px;
            border: 2px solid transparent;
            background-clip: padding-box;
        }
        /* 스크롤 트랙 */
        ::-webkit-scrollbar-track {
            background-color: black;
            -webkit-backdrop-filter: blur(10px);
            backdrop-filter: blur(10px);
        }
        /* 스크롤 코너 */
        ::-webkit-scrollbar-corner {
            background-color: transparent;
        }
    }

    left: 0;
    height: 100vh;

    .click {
        font-family: "BMDOHYEON_ttf" !important;
        position: absolute;
        cursor: pointer;
        z-index: 20;
        font-size: 8rem;
        font-weight: 800;
    }
`;

type IPortfolioItem = {
    position: number;
};

export const PortfolioItemOuter = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const PortfolioItem = styled.div<IPortfolioItem>`
    .background {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.95);
        -webkit-backdrop-filter: blur(2px);
        backdrop-filter: blur(2px);
    }

    .titlebig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 30rem;
        /* margin-left: ${(props) =>
            props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 4rem;
            font-weight: 800;
        }
    }

    .summarybig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40rem;
        /* margin-left: ${(props) =>
            props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 2rem;
            font-weight: 800;
        }
    }

    .iconsetbig {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 47rem;
        /* margin-left: ${(props) =>
            props.position === 1 ? "70rem" : "-70rem"}; */

        p {
            font-family: "BMDOHYEON_ttf";
            font-size: 1.2rem;
            font-weight: 800;
        }
    }

    .portfolio-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;

        .portfolio-background {
            position: absolute;
            top: 50%;
            left: 50%;
            width: 100vw;
            height: 100vh;
            transform: translate(-50%, -50%);
            object-fit: cover;
        }
    }

    .portfolio-items {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -15rem;

        .portfolio-image-item {
            width: 60rem;
            height: 25rem;
            object-fit: cover;
            border-radius: 1rem;
            box-shadow: 0 0 30px black;
        }
    }
`;
