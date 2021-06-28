import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Dashboard() {
  console.log("rendering Dashboard page");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/").then((dataPacket) => {
      setProducts(dataPacket.data.product);
      setCategories(dataPacket.data.product_category);
    });
  }, []);

  console.log("before return");

  return (
    <div id="home">
      <div className="grid-item grid-item1">
        <p>advertise is here</p>
        <br></br>
        <span>
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
        </span>
      </div>

      <div className="grid-item grid-item2">
        <div id="slideshow">
          <div className="slideshow-item item1">
            <img src="https://blog.corp-site.envato.com/cdn-cgi/image/width=1200,quality=95,format=auto/uploads/2020/07/eCommerce-Trends-2020.png" />
          </div>
          <div className="slideshow-item item2">
            <img src="https://www.bigcommerce.com/blog/wp-content/uploads/2019/01/ecommerce-marketing-hero-img.jpg" />
          </div>
          <div className="slideshow-item item3">
            <img src="https://www.makdigitaldesign.com/wp-content/uploads/2020/02/ecommerce-1.png" />
          </div>
        </div>
      </div>

      <div className="grid-item grid-item3">
        <p>advertise is here</p>
        <br></br>
        <span>
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
          all advertise are here all advertise are here all advertise are here
        </span>
      </div>

      <div className="grid-item grid-item4" id="home-product-categories">
        <h3>Product Categories</h3>
        <ul>
          {categories.map((category, index) => {
            const category_link = `/categories/category/${category.id}`;
            return (
              <Link key={index} to={category_link}>
                <li className="home-product-category">
                  <h5>
                    ({index + 1}) {category.product_category_name}
                  </h5>
                  <p>{category.description}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>

      <div className="grid-item grid-item5" id="home-products">
        <h3>Products</h3>
        <ul>
          {products.map((product, index) => {
            const product_link = `/products/product/${product.id}`;
            return (
              <Link key={index} to={product_link}>
                <li className="home-product">
                  <h4>{product.product_name}</h4>
                  <small>{product.description.substr(0, 20) + "..."}</small>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
