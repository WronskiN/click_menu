import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 768px) {
    min-height: 60vh;
    flex-direction: row;
    justify-content: center;
  }
`;

export const StyledHeaderArticle = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  order: 2;

  @media (min-width: 768px) {
    height: 100%;
    width: 40%;
    order: 1;
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    align-items: flex-start;
    padding-left: 2rem;
  }
`;

export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
  @media (min-width: 1200px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledHeaderText = styled.p`
  margin: 2.5rem 0;
  @media (min-width: 768px) {
    margin: 3rem 0 5rem;
  }
`;

export const StyledHeaderImgContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;

  @media (min-width: 768px) {
    width: 60%;
    height: 100%;
    order: 2;
  }
`;
export const StyledImage = styled.img`
  width: 50%;
  height: 100%;
  display: block;

  @media (min-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`;
