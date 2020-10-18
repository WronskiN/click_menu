import React from "react";
import RestaurantMenu from "./RestaurantMenu";
import mealImage from "../../assets/restaurant/meal.jpg";
import vegIcon from "../../assets/vegetarian.svg";
import meatIcon from "../../assets/meat.svg";

const restaurant = [
  {
    name: "Blue Island",
    title: "Blue Island Greek Restaurant",
    linkName: "BlueIslandGreekRestaurant",
    logoImage: "",
    address: {
      city: "Southampton, ",
      street: "Above Bart Street, ",
      houseNumber: "198 ",
      postCode: "SO14 7DW ",
    },
    phone: "02380635045",
    menu: {
      breakfast: [
        {
          title: "Breakfast",
          avaibality: "Served between 09:30 until 15:00",
          dishes: [
            {
              name: "Two toasts with Egg, Bacon and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Bread, egg, bacon and mushrooms",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Bacon, Sausage and Eggs Panini",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, egg and Panini",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.00",
            },
            {
              name: "Bacon OR Sausage Sandwich.",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, sandiwch",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
          ],
        },
        {
          title: "Student Breakfast",
          avaibality: "Tea and Coffee are small size",
          dishes: [
            {
              name: "Egg, Three Bacon, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.20",
            },
            {
              name: "Egg, Three Bacon, Beans, Tomatoes, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Beans, Tomatoes, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.80",
            },
            {
              name: "Bacon or Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon or Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
            {
              name:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown & Tea or Coffee",
              image: `${mealImage}`,
              ingridients:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Two toasts with Egg and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Egg, Mushroom and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans and Bacon",
              image: `${mealImage}`,
              ingridients: "Beans, Bacon and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.70",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon OR Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans, Mushrooms and Two Bacons",
              image: `${mealImage}`,
              ingridients: "Beans, Mushrooms and Bacon",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.90",
            },
          ],
        },
      ],
      starters: [
        {
          title: "Starters",
          dishes: [
            {
              name: "houmous",
              ingridients:
                "mixture of chickpeas, sesame pulp, olive oil and garlic.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "taramosalata",
              ingridients:
                "a blend of smoked cod roe, lemon juice and olive oil.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "greek feta cheese",
              ingridients:
                "traditional feta cheese with splash of olive oil and dried oregano.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled halloumi & lounza",
              ingridients: "cypriot cheese and smoked fillet or pork.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "bougiordi",
              ingridients:
                "feta cheese baked in the oven with tomatoes, green pepper, olive oil and oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "saganaki - pan fried cheese",
              ingridients:
                "pan fried feta cheese or halloumi, coated in flour, egg and milk. Flambe with ouzo.",
              price: "£7.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mushrooms",
              ingridients:
                "fresh mushrooms, fried with olive oil, red wine, oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades",
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "king prawns",
              ingridients:
                "cooked with pepper, garlic, tomatoes and sweet chilli sauce.",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],

      salads: [
        {
          title: "Shef's special fresh salads",
          dishes: [
            {
              name: "greek salad",
              ingridients:
                "mixed green salad with tomatoes, cucumber, feta cheese, onions, olives and olive oil",
              price: "£9.50",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled lounza & halloumi salad",
              ingridients:
                "grilled lounza & halloumi, mixed green salad, tomatoes, cucumber, olives and olive oil",
              price: "£9.50",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      mainCourse: [
        {
          title: "Main Courses",
          dishes: [
            {
              name: "pork souvlaki *",
              image: `${mealImage}`,
              ingridients: "pork cubes charcoal grilled to tender perfection.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "charcoal grilled cubes of chicken, marinated in herbs.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "blue island chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "pieces of chicken, charcoal grilled to tender perfection.",
              price: "£13.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mixed souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "cubes of pork and chicken souvla, charcoal grilled to tender perfection.",
              price: "£14.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mousakka *",
              image: `${mealImage}`,
              ingridients:
                "layers of aubergine, potatoes and mince with cheese topping.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "kleftiko *",
              image: `${mealImage}`,
              ingridients: "lamb covered in foil and slowly cooked in oven.",
              price: "£16.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades *",
              image: `${mealImage}`,
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              image: `${mealImage}`,
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce. Served with rice and Greek salad.",
              price: "£11.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "stifado",
              image: `${mealImage}`,
              ingridients:
                "cubes of beef slowly cooked with onions, tomatoes, red wine and herbs served with rice.",
              vegetarian: false,
              price: "£16.00",
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      lunch: [
        {
          title: "Lunch",
          avaibality: "Available Monday - Saturday, from 11:30 to 15:00",
          dishes: [
            {
              title: "panini",
              meals: [
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese & ham",
                  vegetarian: false,
                  price: "£6.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "lounza & halloumi",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "omelettes",
              meals: [
                {
                  name: "mushrooms",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "ham",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "spanish",
                  vegetarian: false,
                  price: "£10.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "grills",
              meals: [
                {
                  name: "Pork Chop",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Chicken Mediterranean",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Grilled fresh chicken",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
          ],
        },
      ],
      specialOffer: [
        {
          title: "Special Offer",
          dishes: {
            name: "blue island special meze",
            info:
              "Served to a minimum of two people. Traditional speciality of approximately twelve to fifteen traditional greek cold and hot dishes",
            price: "£20 per person",
          },
        },
      ],
      sweets: [
        {
          title: "Sweets",
          dishes: [
            {
              name: "ice cream",
              ingridients: "vanilla and chocolate",
              price: "£6.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chocolate pudding",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "homemade baklava",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      drinks: [
        {
          title: "Drinks menu",
          drinks: [
            {
              title: "red wine",
              list: [
                {
                  name: "merlot",
                  info:
                    "It has a full bodied taste with slightly bitter aftertaste. this wine generally accompanies mail courses. 12% vol.",
                  price: "£16",
                },
                {
                  name: "cabernet",
                  info:
                    "Dry, full boodied wine with a flavour of herbs. Ideal for both red and white meat. 12vol.",
                  price: "£15",
                },
              ],
            },
            {
              title: "rose wine",
              list: [
                {
                  name: "rose",
                  info:
                    "Fresh and slightly fruity perfume whilst the flavour is dry and light. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "white wine",
              list: [
                {
                  name: "pinot grigio",
                  info:
                    "Dry, relatively rounded and pleasent, well balanced in acidity. 12% vol.",
                  price: "£16",
                },
                {
                  name: "chardonnay",
                  info:
                    "A ripe fruity wine, carefully matched with well-ballanced oak. Soft and buttery with peach fruit flavours. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "spirits (25 ml)",
              list: [
                {
                  name: "Vodka / Whisky / Brandy / Tequila / Ouzo",
                  price: "£4.00",
                },
                {
                  name: "Spirits with soft drinks",
                  price: "£4.50",
                },
                {
                  name: "Gin and Tonic",
                  price: "£4.50",
                },
                {
                  name: "Bottled beer",
                  price: "£4.50",
                },
                {
                  name: "Wine by glass (175ml)",
                  price: "£4.50",
                },
              ],
            },
            {
              title: "soft drinks",
              list: [
                {
                  name: "Coke",
                  price: "£3.00",
                },
                {
                  name: "Lemonade",
                  price: "£3.00",
                },
                {
                  name: "Orange juice",
                  price: "£3.50",
                },
                {
                  name: "Apple juice",
                  price: "£3.50",
                },
                {
                  name: "Cranberry juice",
                  price: "£3.50",
                },
              ],
            },
            {
              title: "hot drinks",
              list: [
                {
                  name: "Cafe Creme (black)",
                  price: "£3.00",
                },
                {
                  name: "Americano (black)",
                  price: "£3.00",
                },
                {
                  name: "Espresso",
                  price: "£2.00",
                },
                {
                  name: "Capuccino",
                  price: "£3.00",
                },
                {
                  name: "Cafe au Lait",
                  price: "£3.00",
                },
                {
                  name: "Greek Coffee",
                  price: "£3.00",
                },
                {
                  name: "Tea",
                  price: "£1.00",
                },
              ],
            },
          ],
        },
      ],
    },

    allergenInfo:
      "Standard terms and conditions apply for Set Menu. All of our dishes are prepared in kitchens where nuts, flour etc. are commonly used, so unfortunately we cannot guarantee that our dishes will be free of traces of these products. Olives may contain stones. Fish and meat dishes may contain bones and all dishes may contain items not mentioned in the menu description. All prices include VAT at the current rate.",
    allergen:
      "If you suffer from nut or other allergies, please ask a staff member for more information",
    vegetarian: "suitable for vegetarians",
    socialMedia: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/Blue-Island-747696781924012",
      },
      {
        title: "TripAdvisor",
        url:
          "https://www.tripadvisor.co.uk/Restaurant_Review-g186299-d3177077-Reviews-Blue_Island-Southampton_Hampshire_England.html",
      },
      {
        title: "Twitter",
        url: "#",
      },
    ],
  },
  {
    name: "Shire One",
    title: "Shire One",
    linkName: "Shire1",
    logoImage: "",
    address: {
      city: "Southampton, ",
      street: "Above Bart Street, ",
      houseNumber: "198 ",
      postCode: "SO14 7DW ",
    },
    phone: "02380635045",
    menu: {
      breakfast: [
        {
          title: "Breakfast",
          avaibality: "Served between 09:30 until 15:00",
          dishes: [
            {
              name: "Two toasts with Egg, Bacon and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Bread, egg, bacon and mushrooms",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Bacon, Sausage and Eggs Panini",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, egg and Panini",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.00",
            },
            {
              name: "Bacon OR Sausage Sandwich.",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, sandiwch",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
          ],
        },
        {
          title: "Student Breakfast",
          avaibality: "Tea and Coffee are small size",
          dishes: [
            {
              name: "Egg, Three Bacon, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.20",
            },
            {
              name: "Egg, Three Bacon, Beans, Tomatoes, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Beans, Tomatoes, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.80",
            },
            {
              name: "Bacon or Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon or Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
            {
              name:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown & Tea or Coffee",
              image: `${mealImage}`,
              ingridients:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Two toasts with Egg and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Egg, Mushroom and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans and Bacon",
              image: `${mealImage}`,
              ingridients: "Beans, Bacon and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.70",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon OR Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans, Mushrooms and Two Bacons",
              image: `${mealImage}`,
              ingridients: "Beans, Mushrooms and Bacon",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.90",
            },
          ],
        },
      ],
      starters: [
        {
          title: "Starters",
          dishes: [
            {
              name: "houmous",
              ingridients:
                "mixture of chickpeas, sesame pulp, olive oil and garlic.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "taramosalata",
              ingridients:
                "a blend of smoked cod roe, lemon juice and olive oil.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "greek feta cheese",
              ingridients:
                "traditional feta cheese with splash of olive oil and dried oregano.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled halloumi & lounza",
              ingridients: "cypriot cheese and smoked fillet or pork.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "bougiordi",
              ingridients:
                "feta cheese baked in the oven with tomatoes, green pepper, olive oil and oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "saganaki - pan fried cheese",
              ingridients:
                "pan fried feta cheese or halloumi, coated in flour, egg and milk. Flambe with ouzo.",
              price: "£7.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mushrooms",
              ingridients:
                "fresh mushrooms, fried with olive oil, red wine, oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades",
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "king prawns",
              ingridients:
                "cooked with pepper, garlic, tomatoes and sweet chilli sauce.",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],

      salads: [
        {
          title: "Shef's special fresh salads",
          dishes: [
            {
              name: "greek salad",
              ingridients:
                "mixed green salad with tomatoes, cucumber, feta cheese, onions, olives and olive oil",
              price: "£9.50",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled lounza & halloumi salad",
              ingridients:
                "grilled lounza & halloumi, mixed green salad, tomatoes, cucumber, olives and olive oil",
              price: "£9.50",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      mainCourse: [
        {
          title: "Main Courses",
          dishes: [
            {
              name: "pork souvlaki *",
              image: `${mealImage}`,
              ingridients: "pork cubes charcoal grilled to tender perfection.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "charcoal grilled cubes of chicken, marinated in herbs.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "blue island chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "pieces of chicken, charcoal grilled to tender perfection.",
              price: "£13.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mixed souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "cubes of pork and chicken souvla, charcoal grilled to tender perfection.",
              price: "£14.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mousakka *",
              image: `${mealImage}`,
              ingridients:
                "layers of aubergine, potatoes and mince with cheese topping.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "kleftiko *",
              image: `${mealImage}`,
              ingridients: "lamb covered in foil and slowly cooked in oven.",
              price: "£16.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades *",
              image: `${mealImage}`,
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              image: `${mealImage}`,
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce. Served with rice and Greek salad.",
              price: "£11.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "stifado",
              image: `${mealImage}`,
              ingridients:
                "cubes of beef slowly cooked with onions, tomatoes, red wine and herbs served with rice.",
              vegetarian: false,
              price: "£16.00",
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      lunch: [
        {
          title: "Lunch",
          avaibality: "Available Monday - Saturday, from 11:30 to 15:00",
          dishes: [
            {
              title: "panini",
              meals: [
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese & ham",
                  vegetarian: false,
                  price: "£6.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "lounza & halloumi",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "omelettes",
              meals: [
                {
                  name: "mushrooms",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "ham",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "spanish",
                  vegetarian: false,
                  price: "£10.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "grills",
              meals: [
                {
                  name: "Pork Chop",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Chicken Mediterranean",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Grilled fresh chicken",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
          ],
        },
      ],
      specialOffer: [
        {
          title: "Special Offer",
          dishes: {
            name: "blue island special meze",
            info:
              "Served to a minimum of two people. Traditional speciality of approximately twelve to fifteen traditional greek cold and hot dishes",
            price: "£20 per person",
          },
        },
      ],
      sweets: [
        {
          title: "Sweets",
          dishes: [
            {
              name: "ice cream",
              ingridients: "vanilla and chocolate",
              price: "£6.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chocolate pudding",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "homemade baklava",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      drinks: [
        {
          title: "Drinks menu",
          drinks: [
            {
              title: "red wine",
              list: [
                {
                  name: "merlot",
                  info:
                    "It has a full bodied taste with slightly bitter aftertaste. this wine generally accompanies mail courses. 12% vol.",
                  price: "£16",
                },
                {
                  name: "cabernet",
                  info:
                    "Dry, full boodied wine with a flavour of herbs. Ideal for both red and white meat. 12vol.",
                  price: "£15",
                },
              ],
            },
            {
              title: "rose wine",
              list: [
                {
                  name: "rose",
                  info:
                    "Fresh and slightly fruity perfume whilst the flavour is dry and light. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "white wine",
              list: [
                {
                  name: "pinot grigio",
                  info:
                    "Dry, relatively rounded and pleasent, well balanced in acidity. 12% vol.",
                  price: "£16",
                },
                {
                  name: "chardonnay",
                  info:
                    "A ripe fruity wine, carefully matched with well-ballanced oak. Soft and buttery with peach fruit flavours. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "spirits (25 ml)",
              list: [
                {
                  name: "Vodka / Whisky / Brandy / Tequila / Ouzo",
                  price: "£4.00",
                },
                {
                  name: "Spirits with soft drinks",
                  price: "£4.50",
                },
                {
                  name: "Gin and Tonic",
                  price: "£4.50",
                },
                {
                  name: "Bottled beer",
                  price: "£4.50",
                },
                {
                  name: "Wine by glass (175ml)",
                  price: "£4.50",
                },
              ],
            },
            {
              title: "soft drinks",
              list: [
                {
                  name: "Coke",
                  price: "£3.00",
                },
                {
                  name: "Lemonade",
                  price: "£3.00",
                },
                {
                  name: "Orange juice",
                  price: "£3.50",
                },
                {
                  name: "Apple juice",
                  price: "£3.50",
                },
                {
                  name: "Cranberry juice",
                  price: "£3.50",
                },
              ],
            },
            {
              title: "hot drinks",
              list: [
                {
                  name: "Cafe Creme (black)",
                  price: "£3.00",
                },
                {
                  name: "Americano (black)",
                  price: "£3.00",
                },
                {
                  name: "Espresso",
                  price: "£2.00",
                },
                {
                  name: "Capuccino",
                  price: "£3.00",
                },
                {
                  name: "Cafe au Lait",
                  price: "£3.00",
                },
                {
                  name: "Greek Coffee",
                  price: "£3.00",
                },
                {
                  name: "Tea",
                  price: "£1.00",
                },
              ],
            },
          ],
        },
      ],
    },

    allergenInfo:
      "Standard terms and conditions apply for Set Menu. All of our dishes are prepared in kitchens where nuts, flour etc. are commonly used, so unfortunately we cannot guarantee that our dishes will be free of traces of these products. Olives may contain stones. Fish and meat dishes may contain bones and all dishes may contain items not mentioned in the menu description. All prices include VAT at the current rate.",
    allergen:
      "If you suffer from nut or other allergies, please ask a staff member for more information",
    vegetarian: "suitable for vegetarians",
    socialMedia: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/Blue-Island-747696781924012",
      },
      {
        title: "TripAdvisor",
        url:
          "https://www.tripadvisor.co.uk/Restaurant_Review-g186299-d3177077-Reviews-Blue_Island-Southampton_Hampshire_England.html",
      },
      {
        title: "Twitter",
        url: "#",
      },
    ],
  },
  {
    name: "Shire Two",
    title: "Shire Two",
    linkName: "Shire2",
    logoImage: "",
    address: {
      city: "Southampton, ",
      street: "Above Bart Street, ",
      houseNumber: "198 ",
      postCode: "SO14 7DW ",
    },
    phone: "02380635045",
    menu: {
      breakfast: [
        {
          title: "Breakfast",
          avaibality: "Served between 09:30 until 15:00",
          dishes: [
            {
              name: "Two toasts with Egg, Bacon and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Bread, egg, bacon and mushrooms",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Bacon, Sausage and Eggs Panini",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, egg and Panini",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.00",
            },
            {
              name: "Bacon OR Sausage Sandwich.",
              image: `${mealImage}`,
              ingridients: "Bacon, sausage, sandiwch",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
          ],
        },
        {
          title: "Student Breakfast",
          avaibality: "Tea and Coffee are small size",
          dishes: [
            {
              name: "Egg, Three Bacon, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.20",
            },
            {
              name: "Egg, Three Bacon, Beans, Tomatoes, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "Egg, Three Bacon, Beans, Tomatoes, Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.80",
            },
            {
              name: "Bacon or Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon or Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£3.00",
            },
            {
              name:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown & Tea or Coffee",
              image: `${mealImage}`,
              ingridients:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£4.50",
            },
            {
              name: "Two toasts with Egg and Mushrooms",
              image: `${mealImage}`,
              ingridients: "Egg, Mushroom and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans and Bacon",
              image: `${mealImage}`,
              ingridients: "Beans, Bacon and Bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.70",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "Bacon OR Sausage, bread",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans, Mushrooms and Two Bacons",
              image: `${mealImage}`,
              ingridients: "Beans, Mushrooms and Bacon",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
              price: "£2.90",
            },
          ],
        },
      ],
      starters: [
        {
          title: "Starters",
          dishes: [
            {
              name: "houmous",
              ingridients:
                "mixture of chickpeas, sesame pulp, olive oil and garlic.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "taramosalata",
              ingridients:
                "a blend of smoked cod roe, lemon juice and olive oil.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "greek feta cheese",
              ingridients:
                "traditional feta cheese with splash of olive oil and dried oregano.",
              price: "£5.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled halloumi & lounza",
              ingridients: "cypriot cheese and smoked fillet or pork.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "bougiordi",
              ingridients:
                "feta cheese baked in the oven with tomatoes, green pepper, olive oil and oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "saganaki - pan fried cheese",
              ingridients:
                "pan fried feta cheese or halloumi, coated in flour, egg and milk. Flambe with ouzo.",
              price: "£7.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mushrooms",
              ingridients:
                "fresh mushrooms, fried with olive oil, red wine, oregano.",
              price: "£6.90",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades",
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce.",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "king prawns",
              ingridients:
                "cooked with pepper, garlic, tomatoes and sweet chilli sauce.",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],

      salads: [
        {
          title: "Shef's special fresh salads",
          dishes: [
            {
              name: "greek salad",
              ingridients:
                "mixed green salad with tomatoes, cucumber, feta cheese, onions, olives and olive oil",
              price: "£9.50",
              vegetarian: true,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "grilled lounza & halloumi salad",
              ingridients:
                "grilled lounza & halloumi, mixed green salad, tomatoes, cucumber, olives and olive oil",
              price: "£9.50",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      mainCourse: [
        {
          title: "Main Courses",
          dishes: [
            {
              name: "pork souvlaki *",
              image: `${mealImage}`,
              ingridients: "pork cubes charcoal grilled to tender perfection.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "charcoal grilled cubes of chicken, marinated in herbs.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "blue island chicken souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "pieces of chicken, charcoal grilled to tender perfection.",
              price: "£13.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mixed souvlaki *",
              image: `${mealImage}`,
              ingridients:
                "cubes of pork and chicken souvla, charcoal grilled to tender perfection.",
              price: "£14.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "mousakka *",
              image: `${mealImage}`,
              ingridients:
                "layers of aubergine, potatoes and mince with cheese topping.",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "kleftiko *",
              image: `${mealImage}`,
              ingridients: "lamb covered in foil and slowly cooked in oven.",
              price: "£16.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "dolmades *",
              image: `${mealImage}`,
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint",
              price: "£12.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "meat balls",
              image: `${mealImage}`,
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce. Served with rice and Greek salad.",
              price: "£11.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "stifado",
              image: `${mealImage}`,
              ingridients:
                "cubes of beef slowly cooked with onions, tomatoes, red wine and herbs served with rice.",
              vegetarian: false,
              price: "£16.00",
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      lunch: [
        {
          title: "Lunch",
          avaibality: "Available Monday - Saturday, from 11:30 to 15:00",
          dishes: [
            {
              title: "panini",
              meals: [
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese & ham",
                  vegetarian: false,
                  price: "£6.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "lounza & halloumi",
                  vegetarian: false,
                  price: "£7.90",
                  info: "Toasted panini sandwiches. Served with chips",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "omelettes",
              meals: [
                {
                  name: "mushrooms",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "chicken",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "ham",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "cheese",
                  vegetarian: true,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "spanish",
                  vegetarian: false,
                  price: "£10.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
            {
              title: "grills",
              meals: [
                {
                  name: "Pork Chop",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Chicken Mediterranean",
                  vegetarian: false,
                  price: "£9.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
                {
                  name: "Grilled fresh chicken",
                  vegetarian: false,
                  price: "£8.90",
                  info: "Served with chips & salad",
                  vegIcon: `${vegIcon}`,
                  meatIcon: `${meatIcon}`,
                },
              ],
            },
          ],
        },
      ],
      specialOffer: [
        {
          title: "Special Offer",
          dishes: {
            name: "blue island special meze",
            info:
              "Served to a minimum of two people. Traditional speciality of approximately twelve to fifteen traditional greek cold and hot dishes",
            price: "£20 per person",
          },
        },
      ],
      sweets: [
        {
          title: "Sweets",
          dishes: [
            {
              name: "ice cream",
              ingridients: "vanilla and chocolate",
              price: "£6.00",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "chocolate pudding",
              price: "£7.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
            {
              name: "homemade baklava",
              price: "£6.90",
              vegetarian: false,
              vegIcon: `${vegIcon}`,
              meatIcon: `${meatIcon}`,
            },
          ],
        },
      ],
      drinks: [
        {
          title: "Drinks menu",
          drinks: [
            {
              title: "red wine",
              list: [
                {
                  name: "merlot",
                  info:
                    "It has a full bodied taste with slightly bitter aftertaste. this wine generally accompanies mail courses. 12% vol.",
                  price: "£16",
                },
                {
                  name: "cabernet",
                  info:
                    "Dry, full boodied wine with a flavour of herbs. Ideal for both red and white meat. 12vol.",
                  price: "£15",
                },
              ],
            },
            {
              title: "rose wine",
              list: [
                {
                  name: "rose",
                  info:
                    "Fresh and slightly fruity perfume whilst the flavour is dry and light. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "white wine",
              list: [
                {
                  name: "pinot grigio",
                  info:
                    "Dry, relatively rounded and pleasent, well balanced in acidity. 12% vol.",
                  price: "£16",
                },
                {
                  name: "chardonnay",
                  info:
                    "A ripe fruity wine, carefully matched with well-ballanced oak. Soft and buttery with peach fruit flavours. 12% vol.",
                  price: "£16",
                },
              ],
            },
            {
              title: "spirits (25 ml)",
              list: [
                {
                  name: "Vodka / Whisky / Brandy / Tequila / Ouzo",
                  price: "£4.00",
                },
                {
                  name: "Spirits with soft drinks",
                  price: "£4.50",
                },
                {
                  name: "Gin and Tonic",
                  price: "£4.50",
                },
                {
                  name: "Bottled beer",
                  price: "£4.50",
                },
                {
                  name: "Wine by glass (175ml)",
                  price: "£4.50",
                },
              ],
            },
            {
              title: "soft drinks",
              list: [
                {
                  name: "Coke",
                  price: "£3.00",
                },
                {
                  name: "Lemonade",
                  price: "£3.00",
                },
                {
                  name: "Orange juice",
                  price: "£3.50",
                },
                {
                  name: "Apple juice",
                  price: "£3.50",
                },
                {
                  name: "Cranberry juice",
                  price: "£3.50",
                },
              ],
            },
            {
              title: "hot drinks",
              list: [
                {
                  name: "Cafe Creme (black)",
                  price: "£3.00",
                },
                {
                  name: "Americano (black)",
                  price: "£3.00",
                },
                {
                  name: "Espresso",
                  price: "£2.00",
                },
                {
                  name: "Capuccino",
                  price: "£3.00",
                },
                {
                  name: "Cafe au Lait",
                  price: "£3.00",
                },
                {
                  name: "Greek Coffee",
                  price: "£3.00",
                },
                {
                  name: "Tea",
                  price: "£1.00",
                },
              ],
            },
          ],
        },
      ],
    },

    allergenInfo:
      "Standard terms and conditions apply for Set Menu. All of our dishes are prepared in kitchens where nuts, flour etc. are commonly used, so unfortunately we cannot guarantee that our dishes will be free of traces of these products. Olives may contain stones. Fish and meat dishes may contain bones and all dishes may contain items not mentioned in the menu description. All prices include VAT at the current rate.",
    allergen:
      "If you suffer from nut or other allergies, please ask a staff member for more information",
    vegetarian: "suitable for vegetarians",
    socialMedia: [
      {
        title: "Facebook",
        url: "https://www.facebook.com/Blue-Island-747696781924012",
      },
      {
        title: "TripAdvisor",
        url:
          "https://www.tripadvisor.co.uk/Restaurant_Review-g186299-d3177077-Reviews-Blue_Island-Southampton_Hampshire_England.html",
      },
      {
        title: "Twitter",
        url: "#",
      },
    ],
  },
];

const RestaurantPage = ({ match }) => {
  // console.log(match);
  let name = match.params.id;
  let currentRestaurant = restaurant.filter((rest) => rest.linkName === name);
  // console.log(currentRestaurant);

  return (
    <>
      <RestaurantMenu id={match.params.id} restaurant={currentRestaurant} />
    </>
  );
};

export default RestaurantPage;
