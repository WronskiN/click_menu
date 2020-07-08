import styled from "styled-components";

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 40%;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.l};
    padding-left: 2rem;
  }

  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

export default Logo;
