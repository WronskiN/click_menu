import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 200px;
  height: 80px;
  border: none;
  background-color: transparent;
  padding-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 3px solid ${({ theme }) => theme.text};
  margin-top: 2rem;
  @media (min-width: 768px) {
    width: 345px;
    height: 80px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.text};
    font-weight: ${({ theme }) => theme.bold};
    font-family: "Poppins", sans-serif;
    padding-top: 5rem;

    @media (min-width: 768px) {
      padding-top: 4rem;
      color: ${({ theme }) => theme.text};
      font-weight: ${({ theme }) => theme.bold};
      font-family: "Poppins", sans-serif;
    }
    @media (min-width: 1200px) {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;
