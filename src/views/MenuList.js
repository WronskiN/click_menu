import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import {
  MenuListWrapper,
  InputContainer,
  ListContainer,
  ListItem,
  ItemImage,
} from "./MenuList.styled";
import Title from "../components/atoms/Title/Title";
import InputSearch from "../components/atoms/InputSearch/InputSearch";
import Sotonweb from "../assets/restaurant/sotonweb.svg";
import BlueIsland from "../components/pages/BlueIsland";
import Shire from "../components/pages/Shire";

class MenuList extends Component {
  state = {
    restaurants: [
      {
        name: "Blue Island",
        image: `${Sotonweb}`,
        address: {
          city: "Southampton",
          street: "High Street",
          houseNumber: 7,
        },
        menu: {
          starters: {
            meal1: {
              name: "King prowns in garlic souce",
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
        image: `${Sotonweb}`,
        address: {
          city: "Southampton",
          street: "Ols Road",
          houseNumber: 11,
        },
        menu: {
          starters: {
            meal1: {
              name: "King prowns in garlic souce",
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
  render() {
    const restaurants = this.state.restaurants;
    return (
      <MenuListWrapper>
        <Title>menu list</Title>
        <InputContainer>
          <InputSearch placeholder="Type restaurant name" />
        </InputContainer>
        <Router>
          <ListContainer>
            {restaurants.map((restaurant) => (
              <ListItem key={restaurant.name}>
                <Link to="/BlueIsland">
                  <ItemImage src={restaurant.image} />
                </Link>
              </ListItem>
            ))}
          </ListContainer>

          <Switch>
            <Route path="/BlueIsland">
              <BlueIsland />
            </Route>
            <Route path="/Shire">
              <Shire />
            </Route>
          </Switch>
        </Router>
      </MenuListWrapper>
    );
  }
}

export default MenuList;
