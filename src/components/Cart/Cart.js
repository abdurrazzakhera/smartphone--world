import React from "react";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <p> {cart.name}</p>
    </div>
  );
};

export default Cart;
