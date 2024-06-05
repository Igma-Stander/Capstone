//separating imports
import React from "react";

import Figure from "react-bootstrap/Figure";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import logo from "../Images/Logo.png";
import img1 from "../Images/logo2.png";
import img2 from "../Images/about1.webp";

//using the figures component
function About() {
  return (
    <div>
      <Figure>
        <Figure.Image width={400} height={400} src={logo} />

        <Figure.Caption
          style={{
            width: "800px",
            fontSize: "30px",
            color: "white",
          }}
        >
          At Obsidian Shadow, we're more than just a clothing brand, we're a
          movement born from the depths of urban culture. Rooted in the raw
          energy of grunge and the rebellious spirit of the streets, our mission
          is to empower individuals to express their true selves fearlessly.
          Inspired by the juxtaposition of darkness and light found in abandoned
          graffiti-laden buildings, our clothing embodies the raw authenticity
          of urban life. Each piece tells a story of defiance, resilience, and
          individuality, inviting you to join us in embracing the shadows and
          celebrating the beauty found within the chaos of the city
        </Figure.Caption>
      </Figure>

      {/* 2 images of the store */}

      <Container fluid>
        <hr />
        <Row>
          <Col xs={6}>
            <img style={{ width: "700px" }} src={img2} />
          </Col>
          <Col className="about">
            Step behind the curtain and witness the magic unfold. Captured in
            the fleeting moments backstage at our runway shows, the essence of
            Obsidian Shadow comes to life. Here, amidst the chaos and
            creativity, our team tirelessly crafts each detail, ensuring that
            every garment reflects the bold spirit of urban rebellion.
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="about" style={{ marginLeft: "30px" }}>
            During our unique runway shows, we unveil a special emblem that
            embodies the essence of Obsidian Shadow's dynamic energy on the
            catwalk. Experience the fusion of street energy and runway allure at
            our electrifying shows. The special logo symbolizes our commitment
            to innovation while honoring our grunge roots. It's where
            authenticity meets artistry, igniting a passion that shines through
            every stitch
          </Col>
          <Col xs={6}>
            <img style={{ width: "600px" }} src={img1} />
          </Col>
        </Row>
      </Container>

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
      </div>
    </div>
  );
}

export default About;
