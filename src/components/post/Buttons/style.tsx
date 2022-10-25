import styled from "styled-components";

export const defaultButton = styled.button`
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  margin: 5px;
  background-color: #141414;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 7px black;
  cursor: pointer;

  .link-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;

export const KakaoButton = styled(defaultButton)`
  .kakao-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;

export const LinkButton = styled(defaultButton)`
  .link-inner {
    color: white;
    width: 30px;
    height: 30px;
  }
`;

export const PrintTitle = styled.div`
  font-size: 15px;
  font-weight: 800;
  margin: 5px;
  text-shadow: 3px 3px 30px white;
`;
export const ClearMobile = styled.div`
  @media (max-width: 600px) {
    display: none;
  }
`;

export const Visible = styled.div`
  position: sticky;
  top: 15rem;
  display: grid;
  align-items: center;
  text-align: center;
  grid-template-columns: 2fr 1fr 1fr;
  margin-left: 10rem;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const WarpVisible = styled.div`
  grid-column: 1/2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;
export const WarpVisibleUnder = styled.div`
  grid-column: 2/3;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 1200px) {
    display: none;
  }
`;
