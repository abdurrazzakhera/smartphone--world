import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  console.log(cart);
  return (
    <div>
      <div className='singleCart'>
        <p> {cart.name}</p>
      </div>
    </div>
  );
};

export default Cart;
