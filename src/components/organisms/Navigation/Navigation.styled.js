import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0 2px 0 white;
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
  background-color: ${({ theme }) => theme.primary};
  transition: ${({ open }) => open && "transform .5s ease-in-out"};
  z-index: 1000;

  @media (min-width: 768px) {
    width: 70%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    transform: translateY(0);
  }
  @media (min-width: 1200px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 50%;
    margin-right: 5rem;
    justify-content: space-around;
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
    font-size: ${({ theme }) => theme.fontSize.m};
    text-decoration: none;
    color: ${({ theme }) => theme.text};

    @media (min-width: 1440px) {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
  li a.active {
    color: ${({ theme }) => theme.buttonText};
  }
`;
