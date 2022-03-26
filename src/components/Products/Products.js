import React, { useState } from "react";
import Cardproduct from "../Cardproduct/Cardproduct";
import Cart from "../Cart/Cart";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const cartName = carts.map((cart) => cart.name);
  const [singlePhone, setSinglePhone] = useState();
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
  const randomItems = (name) => {
    const randomItem = name[Math.floor(Math.random() * name.length)];
    setSinglePhone(randomItem);
    setCarts([]);
  };
  const removeCarts = () => {
    setCarts([]);
    setSinglePhone([]);
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
        <div className='col-lg-3 col-md-6 col-sm-12 p-3 cartStyle'>
          {carts.map((cart) => (
            <Cart key={cart.id} cart={cart}></Cart>
          ))}
          <p className='randomitems'> {singlePhone}</p>
          <button onClick={() => randomItems(cartName)}>
            Choose 1 Item
          </button>{" "}
          <br />
          <button onClick={removeCarts}>All Remove</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
