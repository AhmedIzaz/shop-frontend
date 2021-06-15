import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((dataPacket) => {
        setProducts(dataPacket.data.product);
        setCategories(dataPacket.data.product_category);
      })
      .catch((error) => {
        alert(error.message);
      });
  });
  return (
    <div id="dashboard">
      <div>
        <ul>
          {products.map((product) => {
            <li className="home-product-item">
              <a>{product.product_name}</a>
              <span>{product.description}</span>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
