import React from "react";
import RestaurantMenu from "./RestaurantMenu";
import mealImage from "../../assets/restaurant/meal.jpg";

const restaurant = [
  {
    name: "Blue Island",
    title: "Blue Island Greek Restaurant",
    linkName: "BlueIslandGreekRestaurant",
    logoImage: "",
    address: {
      city: "Southampton",
      street: "Above Bart Street",
      houseNumber: "198",
      postCode: "SO14 7DW",
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
              ingridients: "",
              vegetarian: false,
              price: "£4.50",
            },
            {
              name: "Bacon, Sausage and Eggs Panini",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£4.00",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
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
              ingridients: "",
              vegetarian: false,
              price: "£3.20",
            },
            {
              name: "Egg, Three Bacon, Beans, Tomatoes, Bread & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£3.80",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£3.00",
            },
            {
              name:
                "Egg, Three bacon, Beans, Tomatoes, Bread, Sausage, Hash Brown & Tea or Coffee",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£4.50",
            },
            {
              name: "Two toasts with Egg and Mushrooms",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans and Bacon",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£2.70",
            },
            {
              name: "Bacon OR Sausage Sandwich",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£2.50",
            },
            {
              name: "Two toasts with Beans, Mushrooms and Two Bacons",
              image: `${mealImage}`,
              ingridients: "",
              vegetarian: false,
              price: "£2.90",
            },
          ],
        },
      ],
      starters: {
        title: "Starters",
        cold: {
          title: "cold starters",
          dishes: [
            {
              name: "houmous",
              ingridients:
                "mixture of chickpeas, sesame pulp, olive oil and garlic.",
              price: "£5.90",
              vegetarian: true,
            },
            {
              name: "tzatziki",
              ingridients:
                "mixture of thick yogurt, cool cucumber, dried mint and garlic.",
              price: "£5.90",
              vegetarian: true,
            },
            {
              name: "taramosalata",
              ingridients:
                "a blend of smoked cod roe, lemon juice and olive oil.",
              price: "£5.90",
              vegetarian: true,
            },
            {
              name: "greek feta cheese",
              ingridients:
                "traditional feta cheese with splash of olive oil and dried oregano.",
              price: "£5.90",
              vegetarian: true,
            },
          ],
        },
        warm: {
          title: "warm starters",
          dishes: [
            {
              name: "grilled halloumi & lounza",
              ingridients: "cypriot cheese and smoked fillet or pork.",
              price: "£6.90",
              vegetarian: false,
            },
            {
              name: "bougiordi",
              ingridients:
                "feta cheese baked in the oven with tomatoes, green pepper, olive oil and oregano.",
              price: "£6.90",
              vegetarian: true,
            },
            {
              name: "saganaki - pan fried cheese",
              ingridients:
                "pan fried feta cheese or halloumi, coated in flour, egg and milk. Flambe with ouzo.",
              price: "£7.90",
              vegetarian: true,
            },
            {
              name: "mushrooms",
              ingridients:
                "fresh mushrooms, fried with olive oil, red wine, oregano.",
              price: "£6.90",
              vegetarian: true,
            },
            {
              name: "dolmades",
              ingridients:
                "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint.",
              price: "£6.90",
              vegetarian: false,
            },
            {
              name: "meat balls",
              ingridients:
                "lightly spiced meatballs in tomato and pepper sauce.",
              price: "£6.90",
              vegetarian: false,
            },
            {
              name: "king prawns",
              ingridients:
                "cooked with pepper, garlic, tomatoes and sweet chilli sauce.",
              price: "£7.90",
              vegetarian: false,
            },
          ],
        },
      },
      salads: {
        title: "Shef's special fresh salads",
        dishes: [
          {
            name: "greek salad",
            ingridients:
              "mixed green salad with tomatoes, cucumber, feta cheese, onions, olives and olive oil",
            price: "£9.50",
            vegetarian: true,
          },
          {
            name: "grilled lounza & halloumi salad",
            ingridients:
              "grilled lounza & halloumi, mixed green salad, tomatoes, cucumber, olives and olive oil",
            price: "£9.50",
            vegetarian: false,
          },
        ],
      },
      mainCourse: {
        title: "Main Courses",
        dishes: [
          {
            name: "pork souvlaki *",
            image: `${mealImage}`,
            ingridients: "pork cubes charcoal grilled to tender perfection.",
            vegetarian: false,
            price: "£12.00",
          },
          {
            name: "chicken souvlaki *",
            image: `${mealImage}`,
            ingridients:
              "charcoal grilled cubes of chicken, marinated in herbs.",
            vegetarian: false,
            price: "£12.00",
          },
          {
            name: "blue island chicken souvlaki *",
            image: `${mealImage}`,
            ingridients:
              "pieces of chicken, charcoal grilled to tender perfection.",
            vegetarian: false,
            price: "£13.00",
          },
          {
            name: "mixed souvlaki *",
            image: `${mealImage}`,
            ingridients:
              "cubes of pork and chicken souvla, charcoal grilled to tender perfection.",
            vegetarian: false,
            price: "£14.00",
          },
          {
            name: "mousakka *",
            image: `${mealImage}`,
            ingridients:
              "layers of aubergine, potatoes and mince with cheese topping.",
            vegetarian: false,
            price: "£12.00",
          },
          {
            name: "kleftiko *",
            image: `${mealImage}`,
            ingridients: "lamb covered in foil and slowly cooked in oven.",
            vegetarian: false,
            price: "£16.00",
          },
          {
            name: "dolmades *",
            image: `${mealImage}`,
            ingridients:
              "stuffed vine leaves with pork mince, rice, tomatoes, onions, parsley and mint",
            vegetarian: false,
            price: "£12.00",
          },
          {
            name: "meat balls",
            image: `${mealImage}`,
            ingridients:
              "lightly spiced meatballs in tomato and pepper sauce. Served with rice and Greek salad.",
            vegetarian: false,
            price: "£11.00",
          },
          {
            name: "stifado",
            image: `${mealImage}`,
            ingridients:
              "cubes of beef slowly cooked with onions, tomatoes, red wine and herbs served with rice.",
            vegetarian: false,
            price: "£16.00",
          },
        ],
      },
      lunch: {
        title: "Lunch time menu",
        avaibality: "Available Monday - Saturday, from 11:30 to 15:00",
        dishes: [
          {
            title: "panini",
            info: "toasted panini sandwiches. All served with chips",
            meals: [
              {
                name: "chicken",
                vegetarian: false,
                price: "£7.90",
              },
              {
                name: "cheese & ham",
                vegetarian: false,
                price: "£6.90",
              },
              {
                name: "lounza & halloumi",
                vegetarian: false,
                price: "£7.90",
              },
            ],
          },
          {
            title: "omelettes",
            info: "All served with chips & salad",
            meals: [
              {
                name: "mushrooms",
                vegetarian: true,
                price: "£8.90",
              },
              {
                name: "chicken",
                vegetarian: false,
                price: "£9.90",
              },
              {
                name: "ham",
                vegetarian: false,
                price: "£8.90",
              },
              {
                name: "cheese",
                vegetarian: true,
                price: "£8.90",
              },
              {
                name: "spanish",
                vegetarian: false,
                price: "£10.90",
              },
            ],
          },
          {
            title: "grills",
            grillsInfo: "All served with chips & salad",
            meals: [
              {
                name: "Pork Chop",
                vegetarian: false,
                price: "£8.90",
              },
              {
                name: "Chicken Mediterranean",
                vegetarian: false,
                price: "£9.90",
              },
              {
                name: "Grilled fresh chicken",
                vegetarian: false,
                price: "£8.90",
              },
            ],
          },
        ],
      },
      specialOffer: {
        title: "Special Offer",
        dishes: {
          name: "blue island special meze",
          info:
            "Served to a minimum of two people. Traditional speciality of approximately twelve to fifteen traditional greek cold and hot dishes",
          price: "£20 per person",
        },
      },
      sweets: {
        title: "Sweets",
        dishes: [
          {
            name: "ice cream",
            ingridients: "vanilla and chocolate",
            price: "£6.00",
            vegetarian: false,
          },
          {
            name: "chocolate pudding",
            price: "£7.90",
            vegetarian: false,
          },
          {
            name: "homemade baklava",
            price: "£6.90",
            vegetarian: false,
          },
        ],
      },
      drinks: {
        title: "drinks menu",
        drinks: [
          {
            title: "red wine",
            drink: [
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
            drink: {
              name: "rose",
              info:
                "Fresh and slightly fruity perfume whilst the flavour is dry and light. 12% vol.",
              price: "£16",
            },
          },
          {
            title: "white wine",
            drink: [
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
            drink: [
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
            drink: [
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
            drink: [
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
    name: "Shire1",
    linkName: "Shire",
    logoImage: "",
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
    logoImage: "",
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

const RestaurantPage = ({ match }) => {
  console.log(match);

  return (
    <>
      <div>tytul strony</div>
      <RestaurantMenu id={match.params.id} restaurant={restaurant} />
    </>
  );
};

export default RestaurantPage;
