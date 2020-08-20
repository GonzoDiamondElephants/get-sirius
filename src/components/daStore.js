import { createStore } from "redux";

let randomPrice = Math.floor(Math.random() * 10000) + 1;


const initState = {
  cart: 0,
  categories: [
    { name: "Ollivanders", displayName: "Ollivanders" },
    { name: "Flourish and Blotts", displayName: "Flourish and Blotts" },
    {
      name: "Quality Quidditch Supplies",
      displayName: "Quality Quidditch Supplies"
    }
  ],
  products: [
    {
      name: "Cypress Wand",
      description:
        "Quasi-sentient magical instrument through which a witch or wizard channels her or his magical powers",
      stock: 10000000,
      price: randomPrice,
      category: "Ollivanders",
      imgURL:
        "https://vignette.wikia.nocookie.net/harrypotter/images/c/cd/CypressRemusLupin.png/revision/latest?cb=20130807180934"
    },
    {
      name: "Feather",
      description: "Used in Dragon Tonic.",
      stock: 10000000,
      price: randomPrice,
      category: "Ollivanders",
      imgURL:
        "https://www.nostalgicimpressions.com/v/vspfiles/photos/BU440HP-2.jpg?v-cache=1569497929"
    },
    {
      name: "Snallygaster Heartstring Core",
      description: "Substance within a wand",
      stock: 10000000,
      price: randomPrice,
      category: "Ollivanders",
      imgURL:
        "https://www.hp-lexicon.org/wp-content/uploads/2017/06/snallygaster__request___w_i_p___by_tjeb-d9h79nd.jpg"
    },

    {
      name: "The Invisible Book of Invisibility",
      description: "An essential read for anyone intrigued by invisibility",
      stock: 10000000,
      price: 100000000,
      category: "Flourish and Blotts",
      imgURL: "https://www.dia.org/sites/default/files/No_Img_Avail.jpg"
    },
    {
      name: "The Monster Book of Monsters",
      description:
        "A particularly vicious sentient textbook that is used in Care of Magical Creatures",
      stock: 10000000,
      price: 25,
      category: "Flourish and Blotts",
      imgURL:
        "https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_740,w_1100/v1555445083/shape/mentalfloss/902310-the-monster-book-of-monsters-002.jpg?itok=z73E7e-c"
    },
    {
      name: "Magical Me",
      description: "Autobiography of Gilderoy Lockhart",
      stock: 10000000,
      price: 1200,
      category: "Flourish and Blotts",
      imgURL:
        "https://pm1.narvii.com/6679/2c54c2cc0de2ffb7f96cb269094b99066098bf50_hq.jpg"
    },

    {
      name: "Quaffle",
      description:
        "A red, leather-covered ball used as the main object of play",
      stock: 10000000,
      price: 2,
      category: "Quality Quidditch Supplies",
      imgURL:
        "https://images-na.ssl-images-amazon.com/images/I/91toYAtM7qL._AC_SL1500_.jpg"
    },
    {
      name: "Bludger",
      description:
        "The Bludgers rocket around trying to knock players off their brooms",
      stock: 10000000,
      price: 3,
      category: "Quality Quidditch Supplies",
      imgURL:
        "https://www.ewbankauctions.co.uk/catalog_images/auction//large/nr012705-3_1.jpg"
    },
    {
      name: "Golden Snitch",
      description: "The most important ball of the lot.",
      stock: 10000000,
      price: 2,
      category: "Quality Quidditch Supplies",
      imgURL:
        "https://assets.ptimgs.com/ptimgs/rk/images/dp/wcm/202014/0151/harry-potter-golden-snitch-clock-c.jpg"
    }
  ],
  currentCategory: "Ollivanders"
};

const reducer = (state = initState, action) => {
  let newState = { ...state };
  switch (action.type) {
    case "ADD_TO_CART":
      break;
    case "CHANGE_CATEGORY":
      newState.currentCategory = action.payload;
      break;
    default:
      break;
  }

  return newState;
};

export default createStore(reducer);
