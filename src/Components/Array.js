//all images needed in array
import butterfly from "../Images/butterfly_zip.png";
import belt from "../Images/belt.png";
import leather from "../Images/leather_top.png";
import shirt from "../Images/got_this_shirt.png";
import longshirt from "../Images/cross-longsleeve.png";
import face from "../Images/face_shirt.png";
import purple from "../Images/purple_hoodie.png";
import zip from "../Images/purple_zipup.png";
import shorts from "../Images/shorts.png";
import pants from "../Images/skull_sweatpants.png";
import star from "../Images/star_T-shirt.png";
import shoes from "../Images/2_tone_sneakers.jpg";

//separate file with array of products
let products = [
  {
    id: 1,
    title: "You Got This unisex drop shoulder T-Shirt",
    description: "",
    price: 130,
    image: shirt,
  },
  {
    id: 2,
    title: "Grey with red detail T-shirt",
    description: "",
    price: "210",
    image: face,
  },
  {
    id: 3,
    title: "White with multiple stars T-shirt",
    description: "",
    price: 170,
    image: star,
  },
  {
    id: 4,
    title: "Tight leather crop top with cross charm",
    description: " ",
    price: 110,
    image: leather,
  },
  {
    id: 5,
    title: "Black long sleeve butterfly zip-up hoodie",
    description: "",
    price: 220,
    image: butterfly,
  },
  {
    id: 6,
    title: "Purple skelenton grunge hoodie",
    description: "",
    price: 250,
    image: purple,
  },
  {
    id: 7,
    title: "Dark purple hoodie with white pattern",
    description: "",
    price: 235,
    image: zip,
  },
  {
    id: 8,
    title: "Double layer long sleeve cross shirt",
    description: "",
    price: 200,
    image: longshirt,
  },
  {
    id: 9,
    title: "White track pants with skeleton leg",
    description: "",
    price: 195,
    image: pants,
  },
  {
    id: 10,
    title: "Grey basketball shorts with a pop of colour",
    description: "",
    price: 120,
    image: shorts,
  },
  {
    id: 11,
    title: "Black and white patch work lace up sneakers",
    description: "",
    price: 650,
    image: shoes,
  },
  {
    id: 12,
    title: "Obsidian Shadow silver logo belt",
    description: "",
    price: 65,
    image: belt,
  },
];
//added an id component

export default products;
