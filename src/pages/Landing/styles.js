import styled from "styled-components";
import bckImg from "../../assets/img/imgLandingPage/space-1951858.png";

export const Container = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  padding: 5em;
  height: 100vh;
  color: white;
  background-color: rgba(30, 31, 34, 0.75);

  :before {
    content: "";
    background-image: url(${bckImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.9;
  }

  > h1 {
    letter-spacing: 12px;
    font-size: 4em;
    justify-content: center;
  }

  > p {
    margin: 1.75em 0;
    text-align: center;
    padding: 0.75em;
    line-height: 1.75em;
  }

  > .icons {
    > a {
      padding: 2.75em;
      text-decoration: none;
      > img {
        width: 30px;
        height: 30px;
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 4em;

    > h1 {
      letter-spacing: 2px;
      font-size: 1.75em;
      justify-content: center;
    }

    > p {
      margin: 1.75em 0;
      text-align: center;
      padding: 0.75em;
      line-height: 1.75em;
    }

    > .icons {
      > a {
        padding: 1.75em;
        text-decoration: none;
        > img {
          margin-top: 2.75em;
        }
      }
    }
  }
  @media (max-width: 420px) {
    margin: 5px;
    padding: 5px;
  }

  @media (max-width: 290px) {
    > h1 {
      letter-spacing: 2px;
      font-size: 20px;
      margin: 5px;
      text-align: left;
    }

    > p {
      margin: 8px;
      padding: auto;
      line-height: auto;
      font-size: 14px;
    }
  }
`;
