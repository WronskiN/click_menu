import styled from "styled-components";

const Button = styled.button`
  width: 11rem;
  height: 4rem;
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.buttonText};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 14rem;
    height: 5rem;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (min-width: 1440px) {
    width: 14rem;
    height: 5rem;
  }
`;

export default Button;
