import React, { Component } from "react";
import ProductItem from "./../../Components/ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="ProductList">
        <header>
          <ul>
            <li>HOME</li>
            <li>TEA</li>
            <li>SHOP ALL TEA</li>
          </ul>
          <div>Shop all Tea</div>
        </header>
        <div>
          Refine by:
          <slect></slect>
        </div>

        <section>
          <div> 리스트 출력하기 </div>
          <ul>
            <ProductItem />
          </ul>
        </section>
      </div>
    );
  }
}

export default ProductList;
