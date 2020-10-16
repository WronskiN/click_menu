import React, { Fragment } from "react";

const RestaurantMenu = ({ restaurant, ...props }) => {
  return (
    <Fragment>
      {props.id}
      {console.log(restaurant)}
    </Fragment>
  );
};

export default RestaurantMenu;
