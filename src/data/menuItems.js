// File: src/data/menuItems.js

import chicken01 from "../assets/chicken/01.webp";
import chicken02 from "../assets/chicken/02.webp";
import chicken03 from "../assets/chicken/03.webp";
import chicken04 from "../assets/chicken/04.webp";
import chicken05 from "../assets/chicken/05.webp";
import chicken06 from "../assets/chicken/06.webp";
import chicken07 from "../assets/chicken/07.webp";
import chicken08 from "../assets/chicken/08.webp";

import deals01 from "../assets/deals/01.webp";
import deals02 from "../assets/deals/02.webp";
import deals03 from "../assets/deals/03.webp";
import deals04 from "../assets/deals/04.webp";
import deals05 from "../assets/deals/05.webp";
import deals06 from "../assets/deals/06.webp";
import deals07 from "../assets/deals/07.webp";

import burgers01 from "../assets/burgers/01.webp";
import burgers02 from "../assets/burgers/02.webp";
import burgers03 from "../assets/burgers/03.webp";
import burgers04 from "../assets/burgers/04.webp";
import burgers05 from "../assets/burgers/05.webp";
import burgers06 from "../assets/burgers/06.webp";
import burgers07 from "../assets/burgers/07.webp";
import burgers08 from "../assets/burgers/08.webp";
import burgers09 from "../assets/burgers/09.webp";
import burgers10 from "../assets/burgers/10.webp";

import box01 from "../assets/box/01.webp";
import box02 from "../assets/box/02.webp";
import box03 from "../assets/box/03.webp";
import box04 from "../assets/box/04.webp";
import box05 from "../assets/box/05.webp";
import box06 from "../assets/box/06.webp";

import snacks01 from "../assets/snacks/01.webp";
import snacks02 from "../assets/snacks/02.webp";
import snacks03 from "../assets/snacks/03.webp";
import snacks04 from "../assets/snacks/04.webp";
import snacks05 from "../assets/snacks/05.webp";
import snacks06 from "../assets/snacks/06.webp";
import snacks07 from "../assets/snacks/07.webp";
import snacks08 from "../assets/snacks/08.webp";
import snacks09 from "../assets/snacks/09.webp";

import beverages01 from "../assets/beverages/01.webp";

import dips01 from "../assets/dips/01.webp";
import dips02 from "../assets/dips/02.webp";
import dips03 from "../assets/dips/03.webp";
import dips04 from "../assets/dips/04.webp";

export const menuItems = [
  // ================== CHICKEN ==================
  {
    id: 1,
    name: "12 PC Hot & Crispy Chicken Bucket",
    category: "Chicken",
    price: 1799,
    image: chicken01,
    popular: true,
  },
  {
    id: 2,
    name: "10 Pc Leg Bucket Meal",
    category: "Chicken",
    price: 1699,
    image: chicken02,
    savePercentage: 28,
  },
  {
    id: 3,
    name: "10 Pc Leg Bucket",
    category: "Chicken",
    price: 1249,
    image: chicken03,
    savePercentage: 34,
  },
  {
    id: 4,
    name: "8 PC Hot & Crispy Chicken Bucket",
    category: "Chicken",
    price: 1249,
    image: chicken04,
    popular: true,
  },
  {
    id: 5,
    name: "5pc Leg Bucket Meal",
    category: "Chicken",
    price: 849,
    image: chicken05,
    savePercentage: 29,
  },
  {
    id: 6,
    name: "4 Pc Chicken & Fries Meal",
    category: "Chicken",
    price: 869,
    image: chicken06,
  },
  {
    id: 7,
    name: "5 pc Leg Bucket",
    category: "Chicken",
    price: 699,
    image: chicken07,
    savePercentage: 27,
  },
  {
    id: 8,
    name: "2 PC Hot & Crispy Chicken",
    category: "Chicken",
    price: 329,
    image: chicken08,
    popular: true,
  },

  // ================== DEALS ==================
  {
    id: 9,
    name: "Big Deal",
    category: "Deals",
    price: 1399,
    image: deals01,
    saveAmount: 262,
  },
  {
    id: 10,
    name: "Big 8 meal",
    category: "Deals",
    price: 1299,
    image: deals02,
    savePercentage: 25,
  },
  {
    id: 11,
    name: "KFC Big Treat",
    category: "Deals",
    price: 1099,
    image: deals03,
    savePercentage: 30,
  },
  {
    id: 12,
    name: "House Party Combo",
    category: "Deals",
    price: 999,
    image: deals04,
    savePercentage: 28,
  },
  {
    id: 13,
    name: "BIG 8",
    category: "Deals",
    price: 999,
    image: deals05,
    savePercentage: 30,
  },
  {
    id: 14,
    name: "Triple Treat",
    category: "Deals",
    price: 999,
    image: deals06,
    savePercentage: 25,
  },
  {
    id: 15,
    name: "Friendship Bucket",
    category: "Deals",
    price: 949,
    image: deals07,
    saveAmount: 285,
  },

  // ================== BURGERS ==================
  {
    id: 16,
    name: "Hot Nashville Zinger",
    category: "Burgers",
    price: 399,
    image: burgers01,
    newItem: true,
  },
  {
    id: 17,
    name: "2 Classic Zinger Meal",
    category: "Burgers",
    price: 999,
    image: burgers02,
    saveAmount: 145,
  },
  {
    id: 18,
    name: "Mixed Zinger Doubles",
    category: "Burgers",
    price: 799,
    image: burgers03,
  },
  {
    id: 19,
    name: "Double Zinger",
    category: "Burgers",
    price: 499,
    image: burgers04,
    newItem: true,
  },
  {
    id: 20,
    name: "Spicy Zinger with Cheese",
    category: "Burgers",
    price: 404,
    image: burgers05,
  },
  {
    id: 21,
    name: "Classic Zinger with Cheese",
    category: "Burgers",
    price: 384,
    image: burgers06,
  },
  {
    id: 22,
    name: "Toasted Twister",
    category: "Burgers",
    price: 359,
    image: burgers07,
    newItem: true,
  },
  {
    id: 23,
    name: "Spicy Zinger",
    category: "Burgers",
    price: 359,
    image: burgers08,
  },
  {
    id: 24,
    name: "Classic Zinger",
    category: "Burgers",
    price: 339,
    image: burgers09,
  },
  {
    id: 25,
    name: "Super Charger Burger",
    category: "Burgers",
    price: 309,
    image: burgers10,
  },

  // ================== BOX MEALS ==================
  {
    id: 26,
    name: "Zinger Box",
    category: "Box Meals",
    price: 529,
    image: box01,
    savePercentage: 30,
  },
  {
    id: 27,
    name: "Super Charger Box",
    category: "Box Meals",
    price: 499,
    image: box02,
    savePercentage: 31,
  },
  {
    id: 28,
    name: "Toasted Twister Box",
    category: "Box Meals",
    price: 529,
    image: box03,
    savePercentage: 22,
  },
  {
    id: 29,
    name: "Hot Wings Box",
    category: "Box Meals",
    price: 419,
    image: box04,
    savePercentage: 43,
  },
  {
    id: 30,
    name: "Strips Box",
    category: "Box Meals",
    price: 419,
    image: box05,
    savePercentage: 43,
  },
  {
    id: 31,
    name: "Rice Box",
    category: "Box Meals",
    price: 319,
    image: box06,
    savePercentage: 42,
  },

  // ================== SNACKS ==================
  {
    id: 32,
    name: "Dips Bucket",
    category: "Snacks",
    price: 849,
    image: snacks01,
    saveAmount: 197,
  },
  {
    id: 33,
    name: "4 PC Hot & Crispy Chicken",
    category: "Snacks",
    price: 629,
    image: snacks02,
    popular: true,
  },
  {
    id: 34,
    name: "6 PC Boneless Strips",
    category: "Snacks",
    price: 529,
    image: snacks03,
  },
  {
    id: 35,
    name: "6 PC Hot Wings",
    category: "Snacks",
    price: 329,
    image: snacks04,
  },
  {
    id: 36,
    name: "2 PC Hot & Crispy Chicken",
    category: "Snacks",
    price: 329,
    image: snacks05,
    popular: true,
  },
  {
    id: 37,
    name: "Chicken Popcorn Large",
    category: "Snacks",
    price: 299,
    image: snacks06,
  },
  {
    id: 38,
    name: "3 Pc Boneless Chicken Strips",
    category: "Snacks",
    price: 279,
    image: snacks07,
  },
  {
    id: 39,
    name: "Chicken Popcorn Medium",
    category: "Snacks",
    price: 239,
    image: snacks08,
  },
  {
    id: 40,
    name: "Tangy Fries - Large",
    category: "Snacks",
    price: 219,
    image: snacks09,
  },

  // ================== BEVERAGES ==================
  {
    id: 41,
    name: "Aquafina Water",
    category: "Beverages",
    price: 20,
    image: beverages01,
  },

  // ================== DIPS ==================
  {
    id: 42,
    name: "Spicy Mayo",
    category: "Dips",
    price: 29,
    image: dips01,
  },
  {
    id: 43,
    name: "Mayonnaise",
    category: "Dips",
    price: 29,
    image: dips02,
  },
  {
    id: 44,
    name: "Nashville Sauce",
    category: "Dips",
    price: 29,
    image: dips03,
  },
  {
    id: 45,
    name: "Dynamite Mayo",
    category: "Dips",
    price: 29,
    image: dips04,
  },
];
