import React, { useState } from "react";
import RightNav from "../RightNavBar";
import { BurgerBtnStyles } from "./styles";

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <BurgerBtnStyles open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </BurgerBtnStyles>
      <RightNav open={open} />
    </>
  );
};
export default Burger;
