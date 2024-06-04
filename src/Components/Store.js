import React from "react";
import { useState } from "react";
import TotalPrice from "./Cart";
import products from "./Array";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function Products() {
  //used selectedColour for the dropdown button
  let [selectedColour, setSelectedColour] = useState("");
  //used selectedProducts to calculate the total
  let [selectedProducts, setSelectedProducts] = useState([]);
  //used onButton to make sure the total price block only shows when buy is clicked
  let [onButton, setOnButton] = useState(false);

  //updating setSelectedProducts with only the products that were clicked to buy
  let handlePrice = (price) => {
    setSelectedProducts([...selectedProducts, price]);
    setOnButton(true);
  };

  return (
    <div>
      <h1>Products</h1>
      <p>Showing 10 of 10</p>
      {/* rendering each product using the .map method */}
      {products.map((product, index) => (
        // using the new card bootstrap
        <Card>
          <Card.Body>
            {/* making each title a different colour */}
            <Card.Title>{product.title}</Card.Title>

            <Card.Img style={{ width: "180px" }} src={product.image} />
            <Card.Text className="text">{product.description}</Card.Text>
            <Card.Text className="price">R{product.price}</Card.Text>

            {/* followed instructions for the dropdown button */}
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  border: "solid white 2px",
                }}
                variant="success"
              >
                {selectedColour || "Choose size"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setSelectedColour("Small")}>
                  Small
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedColour("Medium")}>
                  Medium
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setSelectedColour("Large")}>
                  Large
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button
              style={{
                border: "solid white 2px",
              }}
              variant="success"
              //   using only the price value in the products array
              onClick={() => handlePrice(product.price)}
            >
              Buy now
            </Button>

            {/* only when onButton is true will total price display in corner */}
            {onButton && (
              <TotalPrice
                //   setting the prop equal to the sum calculation
                totalPrice={selectedProducts.reduce(
                  (first, second) => first + second,
                  0
                )}
                listItem={product.title}
              />
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Products;
