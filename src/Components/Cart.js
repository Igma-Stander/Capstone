import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Store/cartState";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ShippingModal from "../Modal/shippingModal";

//using totalPrice as a prop
function TotalPrice() {
  const [showModal, setShowModal] = useState("");
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const addCart = (item) => {
    dispatch(addItem(item));
  };

  const removeCart = (item) => {
    dispatch(removeItem(item));
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price),
    0
  );

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <br />
      <h2>Total price: R{totalPrice.toFixed(2)}</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <ul key={index}>
                {item.title} - R{item.price}
                <button
                  style={{
                    marginLeft: "10px",
                    marginBottom: "10px",
                    fontWeight: "500",
                  }}
                  onClick={() => removeCart(item)}
                >
                  Remove
                </button>
              </ul>
            ))}
          </ul>
        </div>
      ) : (
        <p>No items in cart</p>
      )}
      <hr />
      <Container>
        <p>Choose a method of shipment:</p>
        <Row>
          <Col></Col>
          <Col>
            <Button
              variant="secondary"
              onClick={() => alert("You have chosen premium shipping")}
            >
              Premium Shipping
            </Button>
          </Col>
          <Col>
            <Button
              variant="secondary"
              onClick={() => alert("You have chosen original shipping")}
            >
              Original Shipping
            </Button>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <p
            style={{ textDecoration: "underline" }}
            onClick={() => setShowModal(true)}
          >
            Help
          </p>
        </Row>
      </Container>
      <ShippingModal show={showModal} handleClose={handleModalClose} />
    </div>
  );
}

export default TotalPrice;
