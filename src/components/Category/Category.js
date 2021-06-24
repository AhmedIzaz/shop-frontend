import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../assets/css/categoryCss/category.css";
export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/category/categories")
      .then((dataPackets) => {
        setCategories(dataPackets.data.categories);
      })
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div id="product-categories-page">
      <ul>
        {categories.map((category, index) => {
          const link = `/categories/category/${category.id}`;
          return (
            <li className="product-category">
              <Link to={link}>
                <h5>
                  ({index + 1}) {category.product_category_name}
                </h5>
                <p>{category.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
