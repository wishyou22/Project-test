import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product Details Page</h1>
      <img
        src={product.src}
        alt={`Product ${product.id}`}
        style={{ 
        width: "100%", 
        height: "400px", 
        objectFit: "cover",
        position:"relative"
      
      
      }}
      />
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          position: "absolute",
          top:"40px",
          left: "10px",
          background: "rgba(0, 0, 0, 0.5)",
          fontSize: "16px",
          borderRadius: " 5px",
        }}
      
      
      >
      <p>{product.content}</p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {product.children.map((child) => (
          <img
            key={child.id}
            src={child.src}
            alt={`Product ${child.id}`}
            style={{
              margin: "5px",
              width: "220px",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
