import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/category.css";
export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/categories")
      .then((dataPacket) => {
        setCategories(dataPacket.data.categories);
      });
  }, []);

  return (
    <div id="product-categories-page">
      <h3>All Product Categories</h3>
      <ul>
        {categories.map((category) => {
          return (
            <li className="product-category">
              <h4>{category.product_category_name}</h4>
              <p>{category.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
