import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Product() {
  const [product, setProduct] = useState({});
  const { product_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/get-product/${product_id}`)
      .then((dataPacket) => {
        setProduct(dataPacket.data);
      })
      .catch((e) => console.log(e.message));
  });

  return (
    <div id="product-page">
      <div id="product">
        <h4>{product.product_name}</h4>
        <p>{product.description}</p>
      </div>
    </div>
  );
}
