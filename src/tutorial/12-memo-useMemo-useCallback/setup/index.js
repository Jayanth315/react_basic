import React, { useState, useEffect, useCallback, useMemo } from "react";
import { data } from "../../../data";
import { useFetch } from "../../9-custom-hooks/final/2-useFetch";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/javascript-store-products";

// every time props or state changes, component re-renders

const calculateMostExpensive = (products) => {
  console.log(products);
  return (
    products.reduce((total, obj) => {
      if (obj.fields.price > total) {
        total = obj.fields.price;
      }
      return total;
    }, 0) / 100
  );
};

const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);

  const mostExpensive = useMemo(() => {
    console.log("Expensive");
    return calculateMostExpensive(products);
  }, [products]);

  const addToCart = useCallback(() => {
    console.log(cart);
    setCart(cart + 1);
  }, [cart]);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h2>Cart: {cart}</h2>
      <h3>Most Expensive: ${mostExpensive}</h3>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};

//React memo = memorize the props
//useCallback = memorize the function
//usememo = memorize the values
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log("Big list Component Called");
  });

  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
  useEffect(() => {
    console.count("Single product called");
  });

  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn" onClick={addToCart}>
        add to cart
      </button>
    </article>
  );
};
export default Index;
