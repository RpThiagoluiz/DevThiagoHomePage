import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  overflow: hidden;

  > .icons {
    display: flex;
    align-items: center;
    justify-content: center;

    > a {
      padding: 1em;
      text-decoration: none;
      > img {
        width: 30px;
        height: 30px;
        &:hover {
          width: 56px;
          height: 56px;
        }
      }
    }
  }

  @media (max-width: 420px) {
    > .icons {
      flex-direction: row;
      position: relative;
    }
  }
  @media (max-width: 360px) {
    > .icons {
      flex-direction: column;
      position: absolute;
      bottom: 30px;
      left: 10px;
      margin: 2px;

      > a {
        margin-top: -10px;
        > img {
          &:hover {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
`;

export const Content = styled.main`
  background-color: #f0f0f0;
  color: #000;
  border-radius: 5px;
  border: 3px solid;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 50px;
  padding: 15px;

  > h2 {
    padding: 20px;
    font-size: 2.75em;
  }

  @media (max-width: 720px) {
    > h2 {
      font-size: 18px;
      font-weight: bold;
    }
    > p {
      font-size: 14px;
    }
  }
  @media (max-width: 480px) {
    > h2 {
      font-size: 16px;
    }
    > p {
      font-size: 12px;
    }
  }
  @media (max-width: 284px) {
    > h2 {
      font-size: 14px;
    }
    > p {
      font-size: 10px;
    }
  }
`;
