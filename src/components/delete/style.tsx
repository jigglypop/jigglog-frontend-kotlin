import styled from "styled-components";
import { FlexCenter } from "../../style/default";

export const Delete = styled(FlexCenter)`
  width: 450px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  position: relative;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0);
  flex-direction: column;
  z-index: 10;

  .upper {
    .delete-text {
      font-size: 2rem;
      font-weight: 800;
      margin: 0;
    }
  }

  .under {
    position: relative;
    padding: 2rem 3rem 0 3rem;
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;
