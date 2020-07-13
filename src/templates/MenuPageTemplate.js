import React from "react";
import PropTypes from "prop-types";
// import Navigation from "../components/organisms/Navigation/Navigation";
// import Contact from "../views/Contact";
// import Footer from "../components/organisms/Footer/Footer";

const MenuPageTemplate = ({ children }) => <>{children}</>;

MenuPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};
export default MenuPageTemplate;
