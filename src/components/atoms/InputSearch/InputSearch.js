import styled from "styled-components";

const InputSearch = styled.input`
  width: 230px;
  height: 40px;
  background-color: ${({ theme }) => theme.primaryLighter};
  border: none;
  border-radius: 0.5rem;
  padding-left: 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  :focus {
    outline: 2px solid white;
    -moz-outline-radius: 0.5rem;
  }

  @media (min-width: 768px) {
    width: 345px;
    height: 60px;
  }
`;

export default InputSearch;
