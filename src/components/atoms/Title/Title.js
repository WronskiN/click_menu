import styled from "styled-components";

const Title = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.bold};
  text-align: center;
  margin: 2rem 0;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xxll};
  }
`;

export default Title;
