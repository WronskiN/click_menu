import React, { useState } from "react";
import { Link } from "react-router-dom";
import { bool } from "prop-types";
import { Nav, NavList } from "./Navigation.styled";
import BarMenu from "../../atoms/BarMenu/BarMenu";
import Logo from "../../atoms/Logo/Logo";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <Link to="/">clickmenu</Link>
      </Logo>
      <NavList open={open} setOpen={setOpen}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/menuList">menu list</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </NavList>

      <BarMenu open={open} setOpen={setOpen} />
    </Nav>
  );
};

NavList.propTypes = {
  open: bool.isRequired,
};

export default Navigation;
