import React from "react";
import { Link } from "react-router-dom";
import { MdHome, MdMovieFilter, MdPeopleOutline } from "react-icons/md";

//Styles
import { Container, Ul } from "./styles";

const TopBar = ({ LeftTitle }) => {
  return (
    <Container>
      <Ul>
        {LeftTitle}
        <Link className="router-Link" to="/">
          <MdHome className="icons" />
          <li>Home</li>
        </Link>

        <Link className="router-Link" to="/project">
          <MdMovieFilter className="icons" />
          <li>Projetos</li>
        </Link>

        <Link className="router-Link" to="/about">
          <MdPeopleOutline className="icons" />
          <li>Sobre Min</li>
        </Link>
      </Ul>
    </Container>
  );
};

export default TopBar;
