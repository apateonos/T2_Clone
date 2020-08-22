import React, { Component } from "react";
import ProductItem from "./../../Components/ProductItem/ProductItem";
import FilterSelectBox from "./Components/FilterSelectBox/FilterSelectBox";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      isClick: false,
      styleList: [
        "loose leaf tea",
        "loose leaf tisane",
        "powdered tisane",
        "sugar",
        "teabag",
      ],
      typeOfTea: [
        "black breakfast tea",
        "black tea",
        "chinese black tea",
        "Chinese green tea",
        "flavored black tea",
        "flavored green tea",
        "flavored oolong tea",
        "flavored white tea",
        "fruit tisane",
        "herbal tisane",
        "japanese green tea",
        "japanese matcha",
        "oolong tea",
        "premium green tea",
        "smoked black tea",
        "sugar tisane",
        "Tea",
        "white Tea",
      ],
      price: ["Under $10", "Under $20", "Under $30", "Under $40", "Under $50"],
      sortBy: [
        "Sort by:",
        "Sort A-Z",
        "Price Descending",
        "Price Ascending",
        "Top Rated",
        "Best Sellers",
      ],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/product/mockProduct.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ product: res.product });
      });
  };
  handleClick = (name) => {
    this.setState({ isClick: !this.state.isClick });
  };

  handleInfo = (name) => {
    console.log(name);
  };

  render() {
    const { styleList, typeOfTea, price, product } = this.state;
    return (
      <div className="ProductList">
        <div className="productContainer">
          <header>
            <ul>
              <li>HOME</li>
              <li>TEA</li>
              <li>SHOP ALL TEA</li>
            </ul>
            <div className="mainHeading">Shop all Tea</div>
          </header>
          <div className="refineByContainer">
            <div className="text">Refine by:</div>
            <FilterSelectBox id="style" name="Style" list={styleList} />
            <FilterSelectBox
              id="typeOfTea"
              name="Type of Tea"
              list={typeOfTea}
            />
            <FilterSelectBox id="price" name="Price" list={price} />
          </div>
          <section>
            <ul className="productitemList">
              {product.map((el) => {
                return <ProductItem product={el} key={el.name} />;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductList;
