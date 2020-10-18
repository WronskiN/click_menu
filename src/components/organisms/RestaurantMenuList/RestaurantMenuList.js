import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MenuListWrapper,
  InputContainer,
  ListContainer,
  ListItem,
  ItemImage,
  SearchListStatus,
} from "./RestaurantMenuList.styled";
import MenuPageTemplate from "../../../templates/MenuPageTemplate";
import Title from "../../atoms/Title/Title";
import InputSearch from "../../atoms/InputSearch/InputSearch";
import Sotonweb from "../../../assets/restaurant/sotonweb.svg";
import BlueIsland from "../../../assets/restaurant/blueIsland/blueIsland.jpg";

const RestaurantList = [
  {
    name: "Blue Island",
    title: "Blue Island Greek Restaurant",
    linkName: "BlueIslandGreekRestaurant",
    logoImage: `${BlueIsland}`,
  },
  {
    name: "Shire1",
    title: "Shire 1",
    linkName: "Shire1",
    logoImage: `${Sotonweb}`,
  },
  {
    name: "Shire2",
    title: "Shire 2",
    linkName: "Shire1",
    logoImage: `${Sotonweb}`,
  },
];

class RestaurantMenuList extends Component {
  state = {
    restaurantList: [],
    search: "",
  };

  componentDidMount() {
    this.setState({
      restaurantList: [...RestaurantList],
    });
  }

  handleChange = (e) => {
    this.setState(
      {
        search: e.target.value.toLowerCase(),
      },
      () => {
        this.updateSearchFilter();
      }
    );
  };

  updateSearchFilter = () => {
    const { search, restaurantList } = this.state;
    let filteredRestaurants = [];
    if (search !== "") {
      filteredRestaurants = restaurantList.filter(
        (el) => el.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
    } else filteredRestaurants = null;

    if (filteredRestaurants) {
      this.setState({
        restaurantList: filteredRestaurants,
      });
    } else {
      this.setState({
        restaurantList: [...RestaurantList],
      });
    }
    return filteredRestaurants;
  };

  render() {
    const restaurants = this.state.restaurantList;
    return (
      <MenuPageTemplate>
        <MenuListWrapper>
          <Title>menu list</Title>
          <InputContainer>
            <InputSearch
              placeholder="Type restaurant name"
              onChange={this.handleChange}
            />
          </InputContainer>
          {restaurants.length === 0 && (
            <SearchListStatus>
              Your restaurant is not here yet. Please let us know if you like to
              see your restaurant menu on our page.
            </SearchListStatus>
          )}
          <ListContainer>
            {restaurants.map((restaurant) => (
              <ListItem key={restaurant.name} restaurant={restaurant}>
                <Link to={`/menuList/${restaurant.linkName}`}>
                  <ItemImage src={restaurant.logoImage} />
                </Link>
              </ListItem>
            ))}
          </ListContainer>
        </MenuListWrapper>
      </MenuPageTemplate>
    );
  }
}

export default RestaurantMenuList;
