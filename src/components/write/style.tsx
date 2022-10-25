import styled from "styled-components";
import { MarkdownStyle } from "../post/style";
import { IWriteUpdateEdit } from "./type";

export const Write = styled.div`
  position: relative;
  font-size: 160%;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding: 50px;
  border-radius: 10px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 #0001, 0 6px 20px 0 #0001;

  display: grid;
  grid-template-columns: 1fr 1fr;

  .mdeditor-wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: scroll;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const WriteMarkdown = styled(MarkdownStyle)`
  position: relative;
  margin: 1rem;
  grid-column: 2/3;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const EditorStyle = styled.div<IWriteUpdateEdit>`
  margin: 1rem;
  grid-column: ${(props) => (props.visible ? "1/2" : "1/3")};
  button {
    margin: 1rem 0;
  }

  .category-wrapper {
    position: relative;
    display: flex;
    flex-wrap: wrap;

    .category-small {
      margin: 0.5rem;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }
`;

export const ImageInput = styled.div`
  margin: 1rem;
  &input[type="file"] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  label {
    display: inline-block;
    margin: 1rem;
    padding: 1rem;
    background-color: #fdfdfd;
    cursor: pointer;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    color: #fff;
    background-color: #1d1d1d;
    box-shadow: 0 0 1rem #1d1d1d;
    border: none;
    font-size: 1.2rem;
  }

  .upload-name {
    display: inline-block;
    padding: 1rem;
    background-color: #f5f5f5;
    border: 1px solid #ebebeb;
    border-bottom-color: #e2e2e2;
    border-radius: 0.25em;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .upload-hidden {
    display: none;
  }
`;
