import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(109.6deg, #808080 16%, #bbb 91.1%);
  background-size: cover;
  background-position: center;

  width: 32%;
  height: 350px;
  text-align: center;

  position: relative;

  margin: 1.75em 0.75em;
  padding: 0.5em;
  border-radius: 18px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  opacity: 0.8;

  /* z-index: -2;
  overflow: hidden; */
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.8s ease-in-out;

  &:focus,
  &:hover {
    background-image: linear-gradient(139.9deg, #808090 16%, #bbb 91.1%);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    opacity: 1;
  }

  .icons {
    width: 72px;
    height: 72px;
    color: rgba(188, 0, 36, 0.8);

    position: absolute;
    top: -30px;
    left: -20px;
  }
`;

export const CardContent = styled.div``;

export const CardFront = styled.div`
  > h2 {
    margin: 15px;
    font-size: 24px;
    text-transform: uppercase;
    color: black;
  }

  > span {
    color: black;
    transition: all 0.5s ease-in;
  }

  > a {
    > img {
      margin-top: 2.25em;

      width: 28px;
      height: 28px;
    }
  }
`;

export const CardBack = styled.div``;

//Flip
