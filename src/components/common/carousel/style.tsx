import styled from "styled-components";

export const CarouselDot = styled.li`
    position: relative;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }
    .dot-white {
        background: var(--white);
    }
    .dot-gray {
        background: var(--gray3);
    }
    h4 {
        visibility: hidden;
    }
`;

export const Carousel = styled.div`
    position: relative;
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;

    .carouselInner {
        position: relative;
        width: 60vw;
        height: 50rem;
        overflow: hidden;
        border-radius: 10px;
        box-shadow: 0 0 10px black;
    }
    .carousels {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.3s ease-in;
    }

    .carousel {
        width: 60vw;
        height: 50rem;
        object-fit: cover;
    }

    .carouselButton {
        position: absolute;
        width: 80vw;
        bottom: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 768px) {
        .carouselInner {
            height: 40rem;
        }
        .carousel {
            height: 40rem;
        }
    }
    @media (max-width: 600px) {
        .carouselInner {
            height: 30rem;
        }
        .carousel {
            height: 30rem;
        }
    }
`;
