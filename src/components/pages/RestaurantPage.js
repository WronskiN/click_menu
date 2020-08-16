import React from "react";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantPage = ({ match }) => {
  console.log(match);

  return (
    <>
      <RestaurantMenu id={match.params.id} />
    </>
  );
};

export default RestaurantPage;
