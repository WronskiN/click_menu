import styled from "styled-components";

const Paragraph = styled.p`
  width: 100%;
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  font-weight: ${(props) => (props.bold ? "700" : "400")};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 1440px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export default Paragraph;
