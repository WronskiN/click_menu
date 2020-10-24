import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const MenuWrapper = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const MealAddress = styled.p`
  text-align: center;
  margin: 1rem 0;
`;

export const MenuInnerContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;
export const MealTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
`;
export const SelectionTitle = styled.h4`
  width: 100%;
  text-align: left;
  margin: 1rem 0;
  text-transform: capitalize;
  padding-left: 0.5rem;
`;
export const MealAvaibality = styled.p`
  width: 100%;
  text-align: center;
  text-decoration: underline;
  font-size: 1.4rem;
  padding: 0 0 1rem 0;
`;

export const MealBox = styled.article`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 20%);
  margin: 1rem 0;
  border: none;
  border-radius: 0.5rem;
`;
export const MealName = styled.h4`
  width: 80%;
  padding: 0.5rem;
  text-transform: capitalize;
  @media (min-width: 1200px) {
    padding: 0 1rem;
    font-size: 2rem;
  }
`;
export const MealIngridients = styled.p`
  width: 80%;
  font-size: 1.4rem;
  padding: 0.5rem;
  @media (min-width: 1200px) {
    padding: 0.5rem 1rem;
    font-size: 1.6rem;
  }
`;
export const MealPrice = styled.p`
  width: 20%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid white;
`;
export const PhotoContainer = styled.div`
  width: 20%;
  height: 100%;
  border-left: 1px solid white;
  @media (min-width: 1200px) {
    height: 40%;
  }
`;
export const MealIconVeg = styled.img`
  display: block;
  width: 40%;
  height: 100%;
  margin: 0 auto;
`;
export const MealNameBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  border-bottom: 1px solid white;
`;
