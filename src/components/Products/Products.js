import React, { useState } from "react";
import Cardproduct from "../Cardproduct/Cardproduct";
import Cart from "../Cart/Cart";

import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  useState(() => {
    fetch("smartphone.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (product) => {
    // console.log(product);
    const newCarts = [...carts, product];
    setCarts(newCarts);
  };

  const randoma = (name) => {
    const randomo = name[Math.floor(Math.random() * name.length)];
    console.log(randomo);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-9'>
          <div className='row row-cols-1 row-cols-md-3 g-4'>
            {products.map((product) => (
              <Cardproduct
                key={product.id}
                product={product}
                addToCart={addToCart}
              ></Cardproduct>
            ))}
          </div>
        </div>
        <div className='col-3 bg-info p-3'>
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
          <button onClick={() => randoma(carts.map((cart) => cart.name))}>
            Ramdom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
