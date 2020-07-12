import React from "react";
import PropTypes from "prop-types";
import Navigation from "../components/organisms/Navigation/Navigation";

const MenuPageTemplate = ({ children }) => (
  <>
    <Navigation />
    {children}
  </>
);

MenuPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MenuPageTemplate;
