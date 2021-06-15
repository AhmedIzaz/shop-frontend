import React, { Component } from 'react'
import axios from "axios"

export default class Dashboard extends Component {

  constructor() {
    super()
    this.state = {
      products: [],
      categories: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:8000/").then(dataPackets => {
      this.setState({ products: dataPackets.data.product, categories: dataPackets.data.product_category })
    }).catch(e => console.log(e.message))
  }

  render() {
    return (
      <div id="dashboard">
        <div id="dashboard-products">
          <h2>Products</h2>
          {this.state.products.map((product) => {
            return (<div className="dashboard-product-item">
              <h3>{product.product_name}</h3>
              <span>{product.description}</span>
            </div>)
              ;
          })}
        </div>
        <div id="dashboard-categories">
          <h2>Categories</h2>
          {this.state.categories.map(category => {
            return (
              <div className="dashboard-category-item">
                <h3>{category.product_category_name}</h3>
                <p>{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


