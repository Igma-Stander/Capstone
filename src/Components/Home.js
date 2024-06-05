//separating the imports to look neater
import React from "react";

import { useState } from "react";
import Image from "react-bootstrap/Image";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Registration from "./Registration";

import logo from "../Images/Logo.png";
import img1 from "../Images/homepage.jpg";
import img2 from "../Images/homepage1.jpg";
import img3 from "../Images/homepage2.webp";
import img4 from "../Images/homepage3.webp";

function Home() {
  let validate = (values) => {
    let errors = {};

    let passwordNum = /(?=.*[0-9])/;
    let passwordUpper = /(?=.*[A-Z])/;
    let passwordLower = /(?=.*[a-z])/;
    let passwordSpecial = /(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?\/~`\-="'])/;

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "password must be 8 characters long";
    } else if (!passwordNum.test(values.password)) {
      errors.password = "Invalid password. Must contain one number";
    } else if (!passwordUpper.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one upper case letter.";
    } else if (!passwordLower.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one lower case letter.";
    } else if (!passwordSpecial.test(values.password)) {
      errors.password =
        "Invalid password. Must contain atleast one special character.";
    }

    if (!values.username) {
      errors.username = "Required";
    } else if (values.username.length > 15) {
      errors.username = "Must be 15 characters or less";
    }
    return errors;
  };

  let SignupForm = () => {
    let formik = useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    //add password aswell
    let handleLogin = () => {
      if (formik.values.username !== "") {
        setLoggedIn(true);
        setName(formik.values.username);
      } else {
        alert("Please enter your User Name.");
      }
    };

    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username" className="label">
          User Name
        </label>
        <input
          className="input"
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Username here"
        />
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}

        <br />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          style={{ marginLeft: "10px" }}
          className="input"
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Password here"
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <br />

        <button className="login" onClick={handleLogin}>
          Login
        </button>
      </form>
    );
  };

  //used useState to get input from user and to detect whether user is already logged in
  let [name, setName] = useState("");
  let [loggedIn, setLoggedIn] = useState(false);

  //if input is empty an alert will pop up

  //created to switch between login and logout
  let handleLogout = () => {
    setLoggedIn(false);
    setName("");
  };

  return (
    <div>
      <Image src={logo} style={{ width: "350px" }} />
      {!loggedIn && <h4>Please log into your account.</h4>}

      {/* if user is logged in this text will show with a logout button */}
      {loggedIn ? (
        <div>
          <h1>Welcome, {name}!</h1>
          <h5>Enjoy your shopping.</h5>
          <button className="login" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        // if user still needs to login this will show
        <div>
          <SignupForm />
        </div>
      )}
      <hr />
      <Container fluid>
        <Row>
          <Col>
            <img style={{ width: "500px", height: "600px" }} src={img1} />
          </Col>
          <Col
            style={{
              textAlign: "center",
              fontSize: "50px",
              fontWeight: "500",
            }}
          >
            Urban Grit, Grunge Chic:
            <br /> Step into Obsidian Shadow's Streetwear World
          </Col>
          <Col>
            <img style={{ width: "500px", height: "600px" }} src={img2} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={6}>
            <img style={{ width: "600px" }} src={img3} />
          </Col>
          <Col className="caption">
            Unleash your inner rebel with Obsidian Shadow's bold streetwear,
            where every stitch tells a story of defiance and individuality.
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="caption">
            Embrace the urban wilderness alongside Obsidian Shadow, where our
            streetwear resonates with the untamed energy of abandoned
            graffiti-laden landscapes.
          </Col>
          <Col xs={6}>
            <img style={{ width: "600px" }} src={img4} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col></Col>
        </Row>
      </Container>

      <p style={{ fontWeight: "700" }}>
        Don't have a password yet? Sign up here
      </p>

      <Link
        to="/reg"
        style={{
          color: "rgb(0, 55, 170)",
          fontWeight: "600",
        }}
      >
        Register
      </Link>
      <hr />
    </div>
  );
}

export default Home;
