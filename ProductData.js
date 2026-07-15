import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.jpg";
import product3 from "../assets/images/product3.jpg";
import product4 from "../assets/images/product4.jpg";
import product5 from "../assets/images/product5.jpg";

const product = {
  id: 1,
  name: "Nike Air Max 270",
  brand: "Nike",
  price: 6999,
  oldPrice: 9999,
  rating: 4.8,
  reviews: 2340,
  description:
    "Lightweight running shoes with breathable mesh upper, air cushioning and durable rubber sole.",

  images: [
    product1,
    product2,
    product3,
    product4,
    product5
  ],

  colors: [
    "Black",
    "White",
    "Blue",
    "Red"
  ],

  sizes: [
    6,
    7,
    8,
    9,
    10
  ]
};

export default product;