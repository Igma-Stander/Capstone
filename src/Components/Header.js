import React from "react";
import "../App.css";

import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

function Header() {
  return (
    // there was white space so this styling fixed that
    <div
      style={{
        backgroundColor: "rgb(196, 34, 23)",
        padding: "10px",
        margin: "0px",
      }}
    >
      {/* using link for the first time */}
      <Container>
        <Row>
          <Col>
            <nav>
              <Link
                to="/"
                style={{ color: "rgb(247,234,72)", textDecoration: "none" }}
              >
                Home
              </Link>
            </nav>
          </Col>
          <Col>
            {/* tried using className but only some styling rendered */}
            <nav>
              <Link
                to="/products"
                style={{ color: "rgb(247,234,72)", textDecoration: "none" }}
              >
                Store
              </Link>
            </nav>
          </Col>
          <Col>
            <nav>
              <Link
                to="/cart"
                style={{ color: "rgb(247,234,72)", textDecoration: "none" }}
              >
                Cart
              </Link>
            </nav>
          </Col>
          <Col>
            <nav>
              <Link
                to="/about"
                style={{ color: "rgb(247,234,72)", textDecoration: "none" }}
              >
                About
              </Link>
            </nav>
          </Col>
          <Col>
            <nav>
              <Link
                to="/reg"
                style={{ color: "rgb(247,234,72)", textDecoration: "none" }}
              >
                Register
              </Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
