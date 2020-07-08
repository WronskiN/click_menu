import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

export const Hamburger = styled.button`
  margin: 0 1rem;
  padding: 0;
  border: 0;
  background-color: transparent;
  z-index: 1001;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const BarsContainer = styled.span`
  width: 35px;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (min-width: 600px) {
    width: 45px;
    height: 40px;
  }
`;

export const HamburgerBars = styled.span`
  width: 35px;
  height: 3px;
  position: absolute;
  background-color: ${theme.text};
  transform: ${({ open }) => (open ? "rotate(225deg)" : null)};
  transition: ${({ open }) =>
    open ? "transform 220ms 120ms ease-in-out" : "transform 220ms ease-in-out"};

  &:before,
  &:after {
    content: "";
    position: absolute;
    width: 35px;
    height: 3px;
    display: block;
    background-color: ${theme.text};

    @media screen and (min-width: 600px) {
      width: 45px;
    }
  }
  &:before {
    top: ${({ open }) => (open ? "0" : "-12px")};
    transition: ${({ open }) =>
      open
        ? "top 100ms ease-out"
        : "top 100ms 250ms ease-in, transform 220ms ease-in-out"};

    @media screen and (min-width: 600px) {
      top: ${({ open }) => (open ? "0" : "-17px")};
    }
  }
  &:after {
    bottom: ${({ open }) => (open ? "0" : "-12px")};
    transform: ${({ open }) => (open ? "rotate(-90deg)" : "null")};
    transition: ${({ open }) =>
      open
        ? "bottom 100ms ease-out, transform 220ms 120ms ease-in-out"
        : "bottom 100ms 250ms ease-in, transform 220ms ease-in-out"};

    @media screen and (min-width: 600px) {
      bottom: ${({ open }) => (open ? "0" : "-17px")};
    }
  }

  @media screen and (min-width: 600px) {
    width: 45px;
  }
`;
