import styled from "styled-components";

const Icon = styled.img`
  width: 6rem;
  height: 4rem;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 7rem;
    height: 5rem;
  }

  @media (min-width: 1440px) {
    width: 8rem;
    height: 6rem;
  }
`;

export default Icon;
