//separating the imports to look neater
import React from "react";

import { useState } from "react";
import Image from "react-bootstrap/Image";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useFormik } from "formik";

import logo from "../Images/logo.png";
import Registration from "./Registration";

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

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address.";
    }
    return errors;
  };

  let SignupForm = () => {
    let formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validate,
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

    let handleLogin = () => {
      if (formik.values.email !== "") {
        setLoggedIn(true);
        setName(formik.values.email);
      } else {
        alert("Please enter your email.");
      }
    };

    return (
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          className="input"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Email here"
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <br />

        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          style={{ marginRight: "30px" }}
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
      <h1 style={{ color: " rgb(0, 55, 170)" }}>Colour City</h1>
      <h4 style={{ color: " rgb(29, 113, 81)" }}>
        Please log into your account.
      </h4>

      {/* if user is logged in this text will show with a logout button */}
      {loggedIn ? (
        <div>
          <h1 style={{ color: "rgb(247, 234, 72)" }}>Welcome, {name}!</h1>
          <h5 style={{ color: "rgb(247, 234, 72)" }}>Enjoy your shopping.</h5>
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

      <p style={{ fontWeight: "700", color: "rgb(29, 113, 81)" }}>
        Don't have a password yet? Sign up here
      </p>

      <Routes>
        <Route path="/reg" element={<Registration />} />
      </Routes>
      <nav>
        <Link
          to="/reg"
          style={{
            color: "rgb(0, 55, 170)",
            fontWeight: "600",
          }}
        >
          Registrate
        </Link>
      </nav>

      <Image src={logo} />
    </div>
  );
}

export default Home;
