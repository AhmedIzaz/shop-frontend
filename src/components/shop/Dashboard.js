import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/").then((dataPacket) => {
      setProducts(dataPacket.data.product);
      setCategories(dataPacket.data.product_category);
    });
  }, []);

  return (
    <div>
      <div id="home-product-categories">
        <h3>Product Categories</h3>
        <ul>
          {categories.map((category) => {
            return (
              <li className="home-product-category">
                <h4>{category.product_category_name}</h4>
                <small>{category.description}</small>
              </li>
            );
          })}
        </ul>
      </div>

      <div id="home-products">
        <h3>Products</h3>
        <ul>
          {products.map((product) => {
            return (
              <li className="home-product">
                <h4>{product.product_name}</h4>
                <small>{product.description}</small>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
