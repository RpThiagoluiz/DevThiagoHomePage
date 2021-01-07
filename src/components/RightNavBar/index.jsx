import React from "react";
import { Link } from "react-router-dom";
import { Ul } from "./styles";
import { MdHome, MdMovieFilter, MdPeopleOutline } from "react-icons/md";

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
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
  );
};

export default RightNav;
