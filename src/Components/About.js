//separating imports
import React from "react";
import TotalPrice from "./Cart";

import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import logo from "../Images/logo.png";
import store from "../Images/store.webp";
import store2 from "../Images/store2.jpg";

//using the figures component
function About() {
  return (
    <div>
      <Figure>
        <Figure.Image width={200} height={200} src={logo} />

        <Figure.Caption style={{ width: "600px", fontSize: "130%" }}>
          Welcome to Colour City, where every aisle is a palette of
          possibilities! Step into a vibrant wonderland where creativity knows
          no bounds. Located at the heart of the city, Colour City is a haven
          for artists, crafters, and DIY enthusiasts alike. Immerse yourself in
          a kaleidoscope of hues as you browse through our extensive collection
          of paints, pencils, fabrics, and more. From traditional mediums to
          cutting-edge tools, we've got everything you need to bring your
          artistic visions to life. Our friendly staff are here to assist you
          every step of the way, offering expert advice and personalized
          recommendations. Whether you're a seasoned pro or just starting out,
          Colour City is your go-to destination for all things creative.
        </Figure.Caption>
      </Figure>

      {/* 2 images of the store */}
      <Container>
        <Row>
          <Col>
            <Image src={store} style={{ width: "600px", height: "350px" }} />
          </Col>
          <Col>
            <Image src={store2} style={{ width: "600px", height: "350px" }} />
          </Col>
        </Row>
      </Container>

      <br />

      {/* making a footer of the contact details */}
      <div className="footer">
        <Container>
          <Row className="col">
            <Col>Contact us:</Col>
          </Row>
          <Row className="col">
            <Col>Phone:</Col>
            <Col>Email:</Col>
            <Col>Location:</Col>
          </Row>
          <Row className="col">
            <Col> 044 565 6721</Col>
            <Col style={{ textDecoration: "underline" }}>
              ObsShadow@gmail.com
            </Col>
            <Col> 10 Kloof Street, Cape Town</Col>
          </Row>
        </Container>

        {/* having trouble transvering the total amount from the products component to about */}
        <div className="total">
          <TotalPrice />
        </div>
      </div>
    </div>
  );
}

export default About;
