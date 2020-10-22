import styled from "styled-components";

export const SearchListStatus = styled.h3`
  width: 100%;
  padding: 0 30px;
  letter-spacing: 1px;
  text-align: center;
  margin: 20px auto;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const MenuListWrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  margin-top: 5rem;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

export const ListContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px;
  grid-gap: 1rem;
  justify-items: center;
  margin-top: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ListItem = styled.li`
  width: 80%;
  height: 100px;
  background-color: #fff;
  list-style: none;
  border: none;
  border-radius: 10px;
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;
