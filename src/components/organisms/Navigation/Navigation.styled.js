import styled from "styled-components";
import { theme } from "../../../theme/mainTheme";

export const Nav = styled.nav`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  transform: ${({ open }) => (open ? "translateY(45%)" : "translateY(-100%)")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  transition: ${({ open }) => open && "transform .5s ease-in-out"};

  @media (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
  }

  li {
    @media (max-width: 767px) {
      width: 100%;
      margin: 2rem 0;
      text-align: center;
    }
  }

  li a {
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: block;
    font-size: ${theme.fontSize.m};
    text-decoration: none;
    color: ${theme.text};
    @media (min-width: 1440px) {
      font-size: ${theme.fontSize.l};
    }
  }

  @media (min-width: 768px) {
    width: 70%;
    height: 100%;
    transform: translateY(0);
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 40%;
    margin-right: 5rem;
  }
`;
