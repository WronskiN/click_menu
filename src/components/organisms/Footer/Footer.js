import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  FooterWrapper,
  FooterIconsWrapper,
  FooterList,
  IconLink,
} from "./Footer.styled";
import Icon from "../../atoms/Icons/Icon";
import EmailImage from "../../../assets/email.svg";
import Facebook from "../../../assets/facebook.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterIconsWrapper>
        <IconLink href="mailto:office@clickmenu.uk">
          <Icon src={EmailImage} />
        </IconLink>
        <IconLink href="https://www.facebook.com/Clickmenu-100848085039052/">
          <Icon src={Facebook} />
        </IconLink>
      </FooterIconsWrapper>
      <Router>
        <FooterList>
          <li>
            <Link to="/privacyPolicy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/termsCondition">Terms &#38; Condition</Link>
          </li>
          <li>
            <p>copyrights &copy; clickmenu.uk</p>
          </li>
          <li>
            <a href="http://www.sotonweb.co.uk">created &#64; sotonweb</a>
          </li>
        </FooterList>
      </Router>
    </FooterWrapper>
  );
};

export default Footer;
