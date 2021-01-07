import styled from "styled-components";

export const Container = styled.div`
  grid-area: TB;

  height: 60px;

  margin: 0.2em;
  border-radius: 7px;

  background-color: #181818;
  color: #f0f0f0;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 10px 0;
  list-style: none;

  > h2 {
    position: absolute;
    left: 0.5em;
    top: 1em;
  }

  :nth-child(1) {
    margin-left: 8vw;
  }

  > .router-Link {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5em;
    margin-top: 0.5em;
    text-decoration: none;
    color: #f0f0f0;

    > li {
      cursor: pointer;
    }

    > .icons {
      margin: auto 5px;
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 1080px) {
    > h2 {
      visibility: hidden;
    }
  }

  @media (max-width: 540px) {
    :nth-child(1) {
      margin-left: 0vw;
    }

    > .router-Link {
      margin-top: 0.5em;
      text-decoration: none;
      color: #f0f0f0;

      > li {
        cursor: pointer;
      }

      > .icons {
        margin: auto 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
  @media (max-width: 280px) {
    font-size: 12px;
    padding: 5px;
  }
`;
