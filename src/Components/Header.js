import React from "react";
import "../App.css";

import { Link } from "react-router-dom";

function Header() {
  return (
    // there was white space so this styling fixed that
    <div
      style={{
        backgroundColor: "white",
        padding: "10px",
        margin: "0px",
        display: "flex",
        justifyContent: "space-around",
        position: "fixed",
        width: "210vh",
      }}
    >
      {/* I would like to add hover but App.css isn't working only inline styling */}
      <nav>
        <Link
          to="/"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </nav>

      {/* tried using className but only some styling rendered */}
      <nav>
        <Link to="/products" style={{ color: "black", textDecoration: "none" }}>
          Store
        </Link>
      </nav>

      <nav>
        <Link
          to="/cart"
          style={{
            color: "black",
            textDecoration: "none",
          }}
        >
          Cart
        </Link>
      </nav>

      <nav>
        <Link to="/about" style={{ color: "black", textDecoration: "none" }}>
          About
        </Link>
      </nav>

      <nav>
        <Link to="/reg" style={{ color: "black", textDecoration: "none" }}>
          Register
        </Link>
      </nav>
    </div>
  );
}

export default Header;
