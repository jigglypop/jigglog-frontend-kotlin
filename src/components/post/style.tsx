import styled from "styled-components";

export const PostPage = styled.div`
  font-family: "NanumBarunGothicSubset" !important;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Comments = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20vh;
`;

export const Post = styled.div`
  position: relative;
  font-size: 160%;
  width: 100%;
  height: 100%;
  z-index: 1;
  padding-top: 50px;
  border-radius: 10px;

  background-color: #ffffff;

  display: grid;
  grid-template-columns: 2fr 5fr 2fr;

  .post-title {
    position: relative;
    font-size: 6rem;
    font-weight: 800;
    margin: 0 0 1rem 0;
  }

  .post-width {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow: hidden;
  }

  .post-image {
    position: relative;

    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  .post-under {
    position: relative;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .user-profile {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-size: 1.2rem;
        font-weight: 800;
      }
    }

    .owner-under {
      display: flex;
      justify-content: center;
      align-items: center;

      .owner-outer {
        margin: 0.5rem;
      }

      .owner-item {
        font-size: 2.5rem;
        margin: 0.5rem;
      }
    }
  }
  .post-tags {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 1.2rem;
      font-weight: 800;
      background-color: #1d1d1d;
      padding: 1rem;
      color: white;
      margin: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem #1d1d1d;
    }

    .post-tag {
      cursor: pointer;
      transition: all 0.3s ease-in;

      &:hover {
        color: #dbdbdb;
      }
    }
  }

  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  @media (max-width: 768px) {
    .post-title {
      font-size: 4rem;
    }
    .post-tags {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .post-title {
      font-size: 3rem;
    }
  }
`;

export const MarkdownStyle = styled.div`
  position: relative;
  width: 95%;
  grid-column: 2/3;

  .markdown-body {
    min-height: 50rem;

    pre {
      div {
        border-radius: 1rem;
        padding: 1rem;
        width: 100vw;

        code {
          span {
            font-family: "Source Sans Pro", "Noto Sans KR", "Roboto",
              "Open Sans", Arial, sans-serif;
            font-size: 1.6rem;
          }
        }
      }
    }
  }

  .post-owner {
    position: relative;
    width: 100%;
    margin-top: 20rem;
    display: flex;
    align-items: flex-start;

    .user-profile {
      display: flex;

      margin-bottom: 5rem;
    }

    .user-summary {
      h3 {
        margin: 1rem;
        font-size: 4rem;
        font-weight: 800;
      }

      p {
        margin: 1rem;
        font-size: 2rem;
        font-weight: 800;
      }
    }
    border-bottom: 2px solid #e6e6e6;
  }

  @media (max-width: 992px) {
    .post-owner {
      width: 100%;
      .user-summary {
        h3 {
          font-size: 3rem;
        }
        p {
          font-size: 2rem;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .post-owner {
      .user-summary {
        h3 {
          font-size: 2.5rem;
        }
        p {
          font-size: 1.5rem;
        }
      }
    }
  }
`;

export const PostLeft = styled.div`
  position: sticky;
  grid-column: 1/2;
  margin-top: 100vh;
  margin-right: 2rem;
`;

export const PostRight = styled.div`
  position: sticky;
  grid-column: 3/4;
  margin-top: 100vh;
  margin-left: 2rem;
`;
