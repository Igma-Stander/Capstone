//all images needed in array
import calculator from "../Images/calculator.webp";
import holder from "../Images/case.jpg";
import liners from "../Images/fine-liners.jpg";
import highlighters from "../Images/highlighters.jpg";
import jumbo from "../Images/jumbo-pencils.png";
import markers from "../Images/markers.webp";
import paper from "../Images/paper.webp";
import pencils from "../Images/pencil-120.webp";
import set from "../Images/pencil-set.webp";
import pack from "../Images/starter-pack.webp";

//separate file with array of products
let products = [
  {
    id: 1,
    title: "Faber-Castell Jumbo Pencils",
    description:
      "Unleash your creativity with our 12-pack of jumbo triangular pencils. Vibrant colors, comfortable grip, and no-break point technology make them perfect for endless drawing fun.",
    price: 185,
    image: jumbo,
  },
  {
    id: 2,
    title: "Faber-Castell Pencil tin",
    description:
      "Ignite your creativity with our 120-pack of colorful pencils in a sleek tin case. From vibrant hues to subtle shades, these pencils offer endless artistic possibilities.",
    price: 3500,
    image: pencils,
  },
  {
    id: 3,
    title: "Touch dual ended markers",
    description:
      "Meet our 48-pack of dual-ended markers. Each marker features two distinct tips - one for precise lines and the other for broad strokes. Smooth ink flow and a rainbow of colors ensure flawless results every time.",
    price: 105,
    image: markers,
  },
  {
    id: 4,
    title: "Staedtler triplus fineliner pens",
    description:
      "Introducing our 24 Triplus Fineliner markers, now with 6 bonus markers included. Designed with a slim 0.3 mm tip for precise lines. The ergonomic design ensures a comfortable grip, allowing you to create effortlessly for hours",
    price: 1200,
    image: liners,
  },
  {
    id: 5,
    title: "Sharpie highlighters",
    description:
      "Introducing our 12-pack of narrow chisel no-smear highlighters. Precision and clarity guaranteed. Their narrow tips ensure clean lines without smudging. Ideal for highlighting important points with ease and accuracy.",
    price: 260,
    image: highlighters,
  },
  {
    id: 6,
    title: "Paper Mate mechanical pencil set",
    description:
      "Discover convenience and comfort with our 4-pack of 0.7mm mechanical pencils, complete with comfort grips. Each pencil comes equipped with extra erasers and lead.The 0.7mm lead size offers versatility for both precise lines and shading.",
    price: 92,
    image: set,
  },
  {
    id: 7,
    title: "Angoo double sided case",
    description:
      "Meet our double-sided pencil bag: the perfect organizer for your stationery essentials. With dual compartments, keep your pens and pencils neatly separated and easily accessible. Durable and compact, it's ideal for both home and travel use.",
    price: 370,
    image: holder,
  },
  {
    id: 8,
    title: "Butterfly assorted colour paper",
    description:
      "Introducing our 100-sheet pack of A4 assorted colorful paper. Perfect for all your crafting and printing needs, each sheet adds a vibrant touch to your projects.",
    price: 90,
    image: paper,
  },
  {
    id: 9,
    title: "Stationary starter pack",
    description:
      "Introducing our School Starter Pack, the ultimate kit for students ready to tackle the academic year. Packed with essentials like hard and softcover books, pens, pencils, book covers, binders, erasers, ruler, glue, and colorful pens and pencils, this comprehensive set has everything needed for a successful school term. This pack ensures students are equipped for learning and creativity.",
    price: 700,
    image: pack,
  },
  {
    id: 10,
    title: "Casio calculator",
    description:
      "Meet the Casio Calculator: your reliable math companion. With its sleek design and user-friendly interface, it simplifies calculations effortlessly.",
    price: 240,
    image: calculator,
  },
];

export default products;
