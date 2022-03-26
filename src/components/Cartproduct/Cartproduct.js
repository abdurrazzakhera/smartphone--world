import React from "react";
import "./Cartproduct.css";

const Cartproduct = (props) => {
  console.log(props.product);
  const { name, price, picture } = props.product;
  return (
    <div className='col'>
      <div className='card h-100'>
        <div className='card-body'>
          <img src={picture} alt='' />
          <h4>{name}</h4>
          <p>Price : {price}</p>
        </div>
        <button className='card-footer btn'>
          <small>Add to cart</small>
        </button>
      </div>
    </div>
  );
};

export default Cartproduct;
