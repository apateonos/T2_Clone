import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  constructor() {
    super();

    this.state = {
      product: [
        {
          url:
            "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw77631367/images/products/2020 Aug/T125AE281_blueberry-crumble_p2.png?sw=262&sh=262&sm=fit",
          name: "Blueberry Cruble Loose Leaf Feature Cube",
          price: 26.0,
        },
      ],
    };
  }
  render() {
    const { product } = this.state;
    return (
      <li className="ProductItem">
        <div className="heartBox">
          <Link>
            <img src="" alt="heart" />
          </Link>
        </div>
        <div className="imageBox">
          <img src={product.url} alt={product.name} />
        </div>
        <Link className="productName">{product.name}</Link>
        <>
          <img alt="starRatings" src="" />
          "(3)"
        </>
        <>
          <Link className="viewDetail">View details</Link>
        </>
        <div className="ProductOption"></div>
        <div>A${product.price}</div>
      </li>
    );
  }
}

export default ProductItem;
