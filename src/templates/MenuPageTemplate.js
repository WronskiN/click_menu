import React from "react";
import PropTypes from "prop-types";

const MenuPageTemplate = ({ children }) => <>{children}</>;

MenuPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MenuPageTemplate;
