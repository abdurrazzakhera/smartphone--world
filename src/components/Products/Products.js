import React, { useState } from "react";
import Cardproduct from "../Cardproduct/Cardproduct";
import Cart from "../Cart/Cart";
import "./Products.css";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const cartName = carts.map((cart) => cart.name);
  const [singphone, setSingphon] = useState();
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
    setSingphon(randomo);
    setCarts([]);
  };
  const removeCarts = () => {
    setCarts([]);
    setSingphon([]);
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-9 col-md-6 col-sm-12'>
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
        <div className='col-lg-3 col-md-6 col-sm-12 bg-info p-3 cartStyle'>
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
          <p> {singphone}</p>
          <button onClick={() => randoma(cartName)}>Ramdom</button> <br />
          <button onClick={removeCarts}>All Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
