import React, { Fragment } from "react";
import Title from "../atoms/Title/Title";
import MenuItem from "../molocules/MenuItem/MenuItem";
import {
  MenuWrapper,
  MealTitle,
  MenuContainer,
  MealBox,
  MealIngridients,
  MealPrice,
  MealAvaibality,
  PhotoContainer,
  MealIconVeg,
  MealName,
  MealAddress,
  MealNameBox,
  SelectionTitle,
} from "../molocules/MenuItem/MenuItem.styled";

const RestaurantMenu = ({ restaurant, ...props }) => {
  const name = props.id;
  let currentRestaurant = restaurant.filter((rest) => rest.linkName === name);
  console.log(currentRestaurant);

  return (
    <>
      <MenuItem>
        {currentRestaurant.map((item) => (
          <MenuWrapper key={item.linkName}>
            <Title>{item.name}</Title>
            <MealAddress>
              {item.address.houseNumber}
              {item.address.street}
              {item.address.city}
              {item.address.postCode}
            </MealAddress>
            {item.menu.breakfast &&
              item.menu.breakfast.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <MealBox key={dish.name}>
                      <MealNameBox>
                        <MealName>{dish.name}</MealName>
                        <PhotoContainer>
                          <MealIconVeg
                            src={
                              dish.vegetarian === true
                                ? dish.vegIcon
                                : dish.meatIcon
                            }
                          ></MealIconVeg>
                        </PhotoContainer>
                      </MealNameBox>
                      <MealIngridients>Ing: {dish.ingridients}</MealIngridients>
                      <MealPrice>{dish.price}</MealPrice>
                    </MealBox>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.starters &&
              item.menu.starters.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <MealBox key={dish.name}>
                      <MealNameBox>
                        <MealName>{dish.name}</MealName>
                        <PhotoContainer>
                          <MealIconVeg
                            src={
                              dish.vegetarian === true
                                ? dish.vegIcon
                                : dish.meatIcon
                            }
                          ></MealIconVeg>
                        </PhotoContainer>
                      </MealNameBox>
                      <MealIngridients>Ing: {dish.ingridients}</MealIngridients>
                      <MealPrice>{dish.price}</MealPrice>
                    </MealBox>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.salads &&
              item.menu.salads.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <MealBox key={dish.name}>
                      <MealNameBox>
                        <MealName>{dish.name}</MealName>
                        <PhotoContainer>
                          <MealIconVeg
                            src={
                              dish.vegetarian === true
                                ? dish.vegIcon
                                : dish.meatIcon
                            }
                          ></MealIconVeg>
                        </PhotoContainer>
                      </MealNameBox>
                      <MealIngridients>Ing: {dish.ingridients}</MealIngridients>
                      <MealPrice>{dish.price}</MealPrice>
                    </MealBox>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.mainCourse &&
              item.menu.mainCourse.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <MealBox key={dish.name}>
                      <MealNameBox>
                        <MealName>{dish.name}</MealName>
                        <PhotoContainer>
                          <MealIconVeg
                            src={
                              dish.vegetarian === true
                                ? dish.vegIcon
                                : dish.meatIcon
                            }
                          ></MealIconVeg>
                        </PhotoContainer>
                      </MealNameBox>
                      <MealIngridients>Ing: {dish.ingridients}</MealIngridients>
                      <MealPrice>{dish.price}</MealPrice>
                    </MealBox>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.lunch &&
              item.menu.lunch.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <Fragment key={dish.title}>
                      <SelectionTitle>{dish.title}</SelectionTitle>
                      {dish.meals.map((dish) => (
                        <MealBox key={dish.name}>
                          <MealNameBox>
                            <MealName>{dish.name}</MealName>
                            <PhotoContainer>
                              <MealIconVeg
                                src={
                                  dish.vegetarian === true
                                    ? dish.vegIcon
                                    : dish.meatIcon
                                }
                              ></MealIconVeg>
                            </PhotoContainer>
                          </MealNameBox>
                          <MealIngridients>Ing: {dish.info}</MealIngridients>
                          <MealPrice>{dish.price}</MealPrice>
                        </MealBox>
                      ))}
                    </Fragment>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.sweet &&
              item.menu.sweet.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  <MealAvaibality>{name.avaibality}</MealAvaibality>
                  {name.dishes.map((dish) => (
                    <MealBox key={dish.name}>
                      <MealNameBox>
                        <MealName>{dish.name}</MealName>
                        <PhotoContainer>
                          <MealIconVeg
                            src={
                              dish.vegetarian === true
                                ? dish.vegIcon
                                : dish.meatIcon
                            }
                          ></MealIconVeg>
                        </PhotoContainer>
                      </MealNameBox>
                      <MealIngridients>Ing: {dish.ingridients}</MealIngridients>
                      <MealPrice>{dish.price}</MealPrice>
                    </MealBox>
                  ))}
                </MenuContainer>
              ))}
            {item.menu.drinks &&
              item.menu.drinks.map((name) => (
                <MenuContainer key={name.title}>
                  <MealTitle>{name.title}</MealTitle>
                  {name.avaibality && (
                    <MealAvaibality>{name.avaibality}</MealAvaibality>
                  )}
                  {name.drinks.map((drink) => (
                    <Fragment key={drink.title}>
                      <SelectionTitle>{drink.title}</SelectionTitle>
                      {drink.list.map((el) => (
                        <MealBox key={el.name}>
                          <MealNameBox>
                            <MealName>{el.name}</MealName>
                          </MealNameBox>
                          <MealIngridients>Ing: {el.info}</MealIngridients>
                          <MealPrice>{el.price}</MealPrice>
                        </MealBox>
                      ))}
                    </Fragment>
                  ))}
                </MenuContainer>
              ))}
          </MenuWrapper>
        ))}
      </MenuItem>
    </>
  );
};

export default RestaurantMenu;
