import styled from "styled-components";

export const HowItWorksWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  @media (min-width: 768px) {
    min-height: 50vh;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 1200px) {
    justify-content: space-between;
  }
`;
