import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
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
import mealImage from "../../../assets/restaurant/meal.jpg";
import BlueIsland from "../../pages/BlueIsland";
import Shire from "../../pages/Shire";

const RestaurantList = [
  {
    name: "Blue Island",
    linkName: "BlueIsland",
    logoImage: `${Sotonweb}`,
    address: {
      city: "Southampton",
      street: "High Street",
      houseNumber: 7,
    },
    menu: {
      starters: {
        meal1: {
          name: "King prowns in garlic souce",
          image: `${mealImage}`,
          ingridients: [
            "king prowns",
            "garlic",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "200g",
          price: "£4.95",
        },
        meal2: {
          name: "Spring rolls x 6 - vegetable",
          image: `${mealImage}`,
          ingridients: [
            "wheat",
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "veg",
          portion: "200g",
          price: "£3.99",
        },
      },
      mainCourse: {
        meal1: {
          name: "Roast Chicken with potato",
          image: `${mealImage}`,
          ingridients: [
            "chicken",
            "potato",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "400g",
          price: "£7.99",
        },
        meal2: {
          name: "Greek Salad",
          image: `${mealImage}`,
          ingridients: [
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
            "ice salad",
          ],
          type: "veg",
          portion: "300g",
          price: "£4.99",
        },
      },
    },
  },
  {
    name: "Shire1",
    linkName: "Shire",
    logoImage: `${Sotonweb}`,
    address: {
      city: "Southampton",
      street: "Ols Road",
      houseNumber: 11,
    },
    menu: {
      starters: {
        meal1: {
          name: "King prowns in garlic souce",
          image: `${mealImage}`,
          ingridients: [
            "king prowns",
            "garlic",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "200g",
          price: "£4.95",
        },
        meal2: {
          name: "Spring rolls x 6 - vegetable",
          image: `${mealImage}`,
          ingridients: [
            "wheat",
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "veg",
          portion: "200g",
          price: "£3.99",
        },
      },
      mainCourse: {
        meal1: {
          name: "Roast Chicken with potato",
          image: `${mealImage}`,
          ingridients: [
            "chicken",
            "potato",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "400g",
          price: "£7.99",
        },
        meal2: {
          name: "Greek Salad",
          image: `${mealImage}`,
          ingridients: [
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
            "ice salad",
          ],
          type: "veg",
          portion: "300g",
          price: "£4.99",
        },
      },
    },
  },
  {
    name: "Shire",
    linkName: "Shire",
    logoImage: `${Sotonweb}`,
    address: {
      city: "Southampton",
      street: "Ols Road",
      houseNumber: 11,
    },
    menu: {
      starters: {
        meal1: {
          name: "King prowns in garlic souce",
          image: `${mealImage}`,
          ingridients: [
            "king prowns",
            "garlic",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "200g",
          price: "£4.95",
        },
        meal2: {
          name: "Spring rolls x 6 - vegetable",
          image: `${mealImage}`,
          ingridients: [
            "wheat",
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "veg",
          portion: "200g",
          price: "£3.99",
        },
      },
      mainCourse: {
        meal1: {
          name: "Roast Chicken with potato",
          image: `${mealImage}`,
          ingridients: [
            "chicken",
            "potato",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
          ],
          type: "meat",
          portion: "400g",
          price: "£7.99",
        },
        meal2: {
          name: "Greek Salad",
          image: `${mealImage}`,
          ingridients: [
            "garlic",
            "onions",
            "paprika",
            "parsley",
            "olive oil",
            "salt",
            "black papper",
            "ice salad",
          ],
          type: "veg",
          portion: "300g",
          price: "£4.99",
        },
      },
    },
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
          <Router>
            <ListContainer>
              {restaurants.map((restaurants) => (
                <ListItem key={restaurants.name}>
                  <Link to={`/${restaurants.linkName}`}>
                    <ItemImage src={restaurants.logoImage} />
                  </Link>
                </ListItem>
              ))}
            </ListContainer>
            {restaurants.length === 0 && (
              <SearchListStatus>
                Your restaurant is not here yet. Please let us know if you like
                to see your restaurant menu on our page.
              </SearchListStatus>
            )}
            <Switch>
              <Route path="/blueIsland" component={BlueIsland} />
              <Route path="/shire" component={Shire} />
            </Switch>
          </Router>
        </MenuListWrapper>
      </MenuPageTemplate>
    );
  }
}

export default RestaurantMenuList;
