import React, { Fragment } from "react";

const RestaurantMenu = ({ restaurant, ...props }) => {
  const name = props.id;
  console.log(name);
  // let currentRestaurant = restaurant.filter((rest) => rest.linkName === name);
  console.log(restaurant);

  return <Fragment>{restaurant.map((name) => name.name)}</Fragment>;
};

export default RestaurantMenu;
