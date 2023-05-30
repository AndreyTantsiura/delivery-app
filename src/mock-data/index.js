import bigMac from "./img/BIG_MAC.jpeg";
import hamburger from "./img/Sdwch_Hamburger.jpeg";
import cheeseburger from "./img/Sdwch_Cheeseburger.jpeg";
import mcChicken from "./img/Sdwch_McChicken.jpeg";
import bigTasty from "./img/BIG_TASTY.jpeg";
import bucketDuetOriginal from "./img/Bucket_Duet_Original.jpeg";
import salsaBurger from "./img/Salsa_Burger.png";
import tacosCheese from "./img/Tacos_Cheese.png";
import twisterSalsa from "./img/twister_salsa.png";
import boxmaster from "./img/boxmaster.png";
import capricciosa from "./img/Capricciosa.jpeg";
import pepperoni from "./img/Pepperoni .jpeg";
import caesar from "./img/Caesar.jpeg";
import fourCheese from "./img/Four_cheese.jpeg";
import whopper from "./img/Whopper.jpeg";
import bbqBeefacon from "./img/BBQ_Beefacon .jpeg";
import steakHouse from "./img/steak_House.jpeg";
import chicken from "./img/Chicken .jpeg";
import fish from "./img/Fish.jpeg";
import originalPhiladelphia from "./img/filadelfiya-original.jpg";
import redDragon from "./img/red-dragon.jpeg";
import california from "./img/california.jpeg";
import greenDragon from "./img/green-dragon.jpeg";
import teriyaki from "./img/Teriyaki.jpg";

export const shops = [
  {
    id: "shop1",
    name: "MD",
    products: [
      {
        name: "Big Mac",
        img: `${bigMac}`,
      },
      { name: "Hamburger", img: `${hamburger}` },
      { name: "Cheeseburger", img: `${cheeseburger}` },
      { name: "McChicken", img: `${mcChicken}` },
      { name: "BigTasty", img: `${bigTasty}` },
    ],
  },
  {
    id: "shop2",
    name: "KFC",
    products: [
      { name: "Bucket Duet Original", img: `${bucketDuetOriginal}` },
      { name: "Salsa Burger", img: `${salsaBurger}` },
      { name: "Tacos Cheese", img: `${tacosCheese}` },
      { name: "Twister Salsa", img: `${twisterSalsa}` },
      { name: "Boxmaster", img: `${boxmaster}` },
    ],
  },
  {
    id: "shop3",
    name: "Pizza",
    products: [
      { name: "Capricciosa", img: `${capricciosa}` },
      { name: "Pepperoni", img: `${pepperoni}` },
      { name: "Caesar", img: `${caesar}` },
      { name: "Four Cheese", img: `${fourCheese}` },
    ],
  },
  {
    id: "shop4",
    name: "Burger",
    products: [
      { name: "Whopper Ala Carte", img: `${whopper}` },
      { name: "BBQ Beefacon", img: `${bbqBeefacon}` },
      { name: "Steak House", img: `${steakHouse}` },
      { name: "Chicken", img: `${chicken}` },
      { name: "Fish", img: `${fish}` },
    ],
  },
  {
    id: "shop5",
    name: "Sushi",
    products: [
      { name: "Original Philadelphia", img: `${originalPhiladelphia}` },
      { name: "Red Dragon", img: `${redDragon}` },
      { name: "California", img: `${california}` },
      { name: "Green Dragon", img: `${greenDragon}` },
      { name: "Teriyaki", img: `${teriyaki}` },
    ],
  },
];
