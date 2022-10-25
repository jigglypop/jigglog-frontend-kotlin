import styled from "styled-components";

export const PostContentOrigin = styled.div`
  line-height: 2em;
  color: black;
  font-weight: 800;

  code {
    background: linear-gradient(
      45deg,
      #b294ff,
      #57e6e6,
      #feffb8,
      #57e6e6,
      #b294ff,
      #57e6e6
    );
    background-size: 500% auto;
    -webkit-animation: gradient 3s linear infinite;
    animation: gradient 3s linear infinite;
    font-family: "BMDOHEYON_ttf" !important;
    font-weight: 400;
    border-radius: 0.5rem;
    padding: 0.5rem;
  }
  hr {
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border: none;
  }
  strong {
    margin-top: 100px;
  }
  ul {
    margin: 0;
  }
  li {
    font-weight: 100;
  }

  blockquote {
    border-left: 0.5rem solid #bfffe7;
    margin: 2rem 0;
    width: 100%;
    background: rgba(185, 185, 185, 0.1);
    padding: 1rem;

    line-height: 1.4em;
    color: #a5a5a5;
  }

  pre,
  span {
    font-family: "FiraMono-Regular" !important;
    margin-top: 10px;
    font-size: 14px !important;
    width: 60vw;
    overflow-x: hidden;
  }
  table {
    min-width: 45vw;
    margin: 20px;
    background: #f9f9f9;
  }
  thead {
    background: #e2e2e2;
  }
  th,
  tr,
  td {
    border: 2px solid gray;
    color: black;
    padding: 10px;
    min-width: 3rem;
  }
  hr {
    margin-bottom: 30px;
  }

  @media (max-width: 992px) {
    padding: 0 10px 10px 10px;
    line-height: 2em;
    color: black;
    hr {
      margin-bottom: 10px;
    }
    p,
    blockquote,
    pre {
      width: 100%;
    }
    ul {
      padding: 0.5rem;
    }
    li {
      padding: 0.5rem;
    }
    table {
      margin: 20px;
    }
  }
`;

export const PostContent = styled(PostContentOrigin)`
  em {
    font-weight: 1000;
    text-decoration: underline;
  }
  code {
    font-family: "NanumSquareL", sans-serif !important;
    position: relative;
  }
  del {
    text-decoration: none;
    color: gray;
  }
`;
