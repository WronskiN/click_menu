import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 200px;
  height: 80px;
  border: none;
  background-color: transparent;
  padding-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  border-bottom: 3px solid ${({ theme }) => theme.text};
  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text};
    font-weight: ${({ theme }) => theme.bold};
  }

  @media (min-width: 768px) {
    width: 345px;
    height: 60px;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
