import styled from "styled-components";

export const StyledHeaderWrapper = styled.div`
  width: 100%;
  height: 50vh;
  padding-top: 10vh;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  border: 1px solid white;
`;

export const StyledHeaderArticle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
export const StyledHeaderImgContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.bold};
  margin-bottom: 2rem;
`;
export const StyledHeaderText = styled.p``;
