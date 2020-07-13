import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
  MenuListWrapper,
  InputContainer,
  ListContainer,
  ListItem,
  ItemImage,
} from "./MenuList.styled";
import MainTemplate from "../templates/MainTemplate";
import Title from "../components/atoms/Title/Title";
import InputSearch from "../components/atoms/InputSearch/InputSearch";
import Sotonweb from "../assets/restaurant/sotonweb.svg";
import mealImage from "../assets/restaurant/meal.jpg";
import BlueIsland from "../components/pages/BlueIsland";
import Shire from "../components/pages/Shire";

class MenuList extends Component {
  state = {
    restaurantList: "",
    value: "",
    restaurant: [
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
    ],
  };

  handleChange = (e) => {
    let value = e.target.value.toLowerCase();
    this.setState({
      value: value,
    });
    const filteredRestaurant = [...this.state.restaurant];
    console.log(filteredRestaurant);
    filteredRestaurant.filter((restaurant) =>
      restaurant.name.toLowerCase() === value.toLowerCase()
        ? this.setState({
            restaurant,
          })
        : null
    );
  };

  render() {
    const restaurants = this.state.restaurant;
    return (
      <MainTemplate>
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
            <Switch>
              <Route path="/blueIsland" component={BlueIsland} />
              <Route path="/shire" component={Shire} />
            </Switch>
          </Router>
        </MenuListWrapper>
      </MainTemplate>
    );
  }
}

export default MenuList;
