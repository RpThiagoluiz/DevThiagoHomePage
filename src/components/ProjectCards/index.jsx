import React from "react";

import { Container, CardBack, CardFront } from "./styles";

import { Link } from "react-router-dom";

import { MdAutorenew } from "react-icons/md";

// import reactSvg from "../../assets/img/imgCards/react.svg";
// import cssSvg from "../../assets/img/imgCards/css.svg";
// import tscriptSvg from "../../assets/img/imgCards/typescript.svg";

const Card = ({ title, description }) => {
  // const iconSelected = useMemo(() => {
  //   switch (icon) {
  //     case "react":
  //       return reactSvg;
  //     case "css":
  //       return cssSvg;
  //     case "typeScript":
  //       return tscriptSvg;
  //     default:
  //       return undefined;
  //   }
  // }, [icon]);

  return (
    <Container>
      <CardFront>
        <h3>{title}</h3>
        <br />
        <span>{description}</span>
        <br />
        <small>Passe o mouse para vê-los!</small>
        {/* <img src={iconSelected} alt={title} /> */}
      </CardFront>
      <CardBack>
        <p>Basduahudao Deu baum</p>
      </CardBack>

      <MdAutorenew className="icons" />
    </Container>
  );
};

export default Card;
