import React from "react";
import { Link } from "react-router-dom";
import "./Product.css"

const ProductPage = ({ products }) => {
  return (
    <>
      <h1>Product Page</h1>
      <div className="wrapper">
        {products.map((product) => (
          <div className="image" key={product.id} >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.src}
                alt={`Product ${product.id}`}
              />
              <div className="content">
              <h2>hiiiiiiiiii</h2>
              <p>hellooooooooooooooooooooo</p>
            </div>
            </Link>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
