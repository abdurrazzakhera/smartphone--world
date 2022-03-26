import React, { useState } from "react";
import Cartproduct from "../Cartproduct/Cartproduct";
// import Cartproduct from "../CartProduct/Cartproduct";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useState(() => {
    fetch("smartphone.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {products.map((product) => (
              <Cartproduct product={product}></Cartproduct>
            ))}
          </div>
        </div>
        <div className='col-2'>
          <h2>This is cart</h2>
        </div>
      </div>
    </div>
  );
};

export default Products;
