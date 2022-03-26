import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "./Cardproduct.css";

const Cardproduct = (props) => {
  // console.log(props.product);
  const { product, addToCart } = props;
  const { name, price, picture } = product;
  return (
    <div className='col'>
      <div className='card h-100'>
        <div className='card-body'>
          <img src={picture} alt='' />
          <h4>{name}</h4>
          <p>Price : {price}</p>
        </div>
        <button onClick={() => addToCart(product)} className='card-footer btn'>
          <small>
            Add to cart <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
          </small>
        </button>
      </div>
    </div>
  );
};

export default Cardproduct;
