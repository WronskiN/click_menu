import styled from "styled-components";

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 2rem;
  }
`;
export const FormErrorMessage = styled.span`
  font-size: 1rem;
  color: red;
  text-align: center;
  padding: 0.5rem 0;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`;
export const FormCorrectMessage = styled.span`
  font-size: 1.4rem;
  color: green;
  text-align: center;
  padding: 0.5rem 0;
`;
