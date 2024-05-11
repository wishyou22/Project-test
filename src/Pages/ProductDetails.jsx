import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = ({ products }) => {
  function viewImage(child, index) {
    const a = child.src;
    setData({ a, index });
  }
  const [data, setData] = useState({
    img: "",
    i: 0,
  });
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      {data.img && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            display: "flex",
            justifyContent: "center",
            alignitems: "center",
            overflow: "hidden",
          }}
        >
          <img src ={data.img} style={{
            width:'auto',
            maxWidth:"90%",
            maxHeight:"90%"
          }}/>
        </div>
      )}
      <h1>Product Details Page</h1>
      <img
        src={product.src}
        alt={`Product ${product.id}`}
        style={{
          width: "100%",
          height: "400px",
          objectFit: "cover",
          position: "relative",
        }}
      />
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          position: "absolute",
          top: "40px",
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
        {product.children.map((child, index) => (
          <img
            key={child.id}
            src={child.src}
            alt={`Product ${child.id}`}
            onClick={() => viewImage(child, index)}
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
