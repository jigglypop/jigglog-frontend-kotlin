import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export const Auth = styled(FlexCenter)`
    width: 450px;
    height: 500px;
    background-color: rgba(0, 0, 0, 0.4);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    position: relative;
    color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0);
    flex-direction: column;
    z-index: 10;

    input[type=password] {
        font-family:'Malgun gothic', dotum, sans-serif;

        &::placeholder { 
            font-family: 'NanumSquareL', sans-serif; 
            color: white;
            opacity: 1;
        } 
    }

    .login-text {
        font-size: 6rem;
        font-weight: 800;
        margin: 0;
    }

    form {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close {
        color: #C6FFDD;
        background-color: transparent;
        font-size: 2.5rem;
        position: absolute;
        top: 2rem;
        right: 2rem;
    }

    .error {
        margin-top: 2rem;
        color: #ffb3b3;
        font-size: 1.2rem;
        font-weight: 800;
    }

    .toggle {
        margin-top: 2rem;
        color: #b8a8ff;
        font-size: 1.2rem;
        font-weight: 800;
    }
`;

export const KaKao = styled(FlexCenter)`
    width: 4rem;
    height: 4rem;
    background-color: var(--yellow);
    border-radius: 50%;
    box-shadow: 0 0 10px #1d1d1d;
    color: black;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.3s ease-in;
    z-index: 1;

    &:hover {
        box-shadow: 0 0 20px #1d1d1d;
    }


`;
