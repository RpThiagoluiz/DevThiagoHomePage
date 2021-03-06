import styled from "styled-components";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column nowrap;

  background-color: #0c0c0c80;

  position: fixed;
  top: 0;
  right: 0;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    background-color: rgba(0, 0, 0, 0.9);
    transform: ${({ open }) => (open ? "translateX(0)" : "translateY(100%)")};
    transition: transform 0.8s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    font-size: 1.25em;
    font-weight: bold;
  }

  > .router-Link {
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.5em;
    color: #f0f0f0;

    transition: opacity 0.3s ease-in-out;

    > li {
      padding: 38px 10px;
      color: #fff;
      cursor: pointer;
    }

    &:hover {
      opacity: 0.7;
    }

    @media (max-width: 768px) {
      margin-bottom: 100px;
      padding: 5px;
    }
  }
`;
