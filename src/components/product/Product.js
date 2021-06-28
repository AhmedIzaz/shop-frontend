import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Card from "../customer/Card.js";
export default function Product() {
  console.log("rendering Product page");

  const [product, setProduct] = useState({});
  const { product_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/product/get-product/${product_id}`)
      .then((dataPacket) => {
        setProduct(dataPacket.data);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div id="product-page">
      <div id="product">
        <h4>{product.product_name}</h4>
        <p>{product.description}</p>
        <Card id={product.id} />
      </div>
    </div>
  );
}
