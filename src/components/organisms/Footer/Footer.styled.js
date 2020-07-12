import styled from "styled-components";

export const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FooterList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: ${({ theme }) => theme.text};
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 2rem;
  }
  li {
    width: 100%;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xs};

    @media (min-width: 768px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media (min-width: 1440px) {
      font-size: ${({ theme }) => theme.fontSize.m};
    }

    a {
      width: 100%;
      height: 100%;
      padding: 1rem 0;
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      &:hover {
        cursor: pointer;
        color: black;
      }
    }

    p {
      padding: 1rem 0;
    }
  }
`;

export const FooterIconsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const IconLink = styled.a`
  width: "50%";
  height: "100%";
  display: "flex";
  justify-content: "center";
  align-items: center;
  margin: 0 1rem;
`;
