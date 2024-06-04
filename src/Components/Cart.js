import React from "react";

//using totalPrice as a prop
function TotalPrice({ totalPrice, listItems }) {
  return (
    <div className="total">
      <h2>Total price:</h2>
      <p>R{totalPrice}</p>
      <p>Items:{listItems}</p>
    </div>
  );
}

export default TotalPrice;
