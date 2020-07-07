import React from "react";
import { bool, func } from "prop-types";
import { Hamburger, BarsContainer, HamburgerBars } from "./BarMenu.styled";

const BarMenu = ({ open, setOpen }) => {
  return (
    <Hamburger aria-label="menu">
      <BarsContainer>
        <HamburgerBars open={open} onClick={() => setOpen(!open)} />
      </BarsContainer>
    </Hamburger>
  );
};

BarMenu.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default BarMenu;
