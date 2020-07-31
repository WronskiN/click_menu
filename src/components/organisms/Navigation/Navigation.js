import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { bool } from "prop-types";
import { Nav, NavList } from "./Navigation.styled";
import BarMenu from "../../atoms/BarMenu/BarMenu";
import Logo from "../../atoms/Logo/Logo";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <NavLink to="/">clickmenu</NavLink>
      </Logo>
      <NavList open={open} setOpen={setOpen}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/menuList">menu list</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
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
