import React, { Component } from "react";
import FilterSelectBox from "./Components/FilterSelectBox/FilterSelectBox";
import ProductItem from "./../../Components/ProductItem/ProductItem";
import "./ProductList.scss";
import { Link } from "react-router-dom";

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
      selectedStyle: [{ Style: [] }, { "Type of Tea": [] }, { Price: [] }],
    };
  }

  componentDidMount = () => {
    // "http://10.58.4.238:8000/products/all"
    fetch("http://localhost:3000/Data/product.json")
      .then((res) => res.json())
      .then((res) => this.setState({ product: res.product_list }));
  };

  handleSort = (e) => {
    //sortby 정렬 기능
    console.log("sortby: " + e.target.id);
  };

  handlefilterClick = (a) => {
    let data = Object.values(a);
    // result[Object.keys(a)] = Object.values(a);
    const { selectedStyle } = this.state;
    // this.setState({
    //   selectedStyle: selectedStyle.map(
    //     (el) =>
    //       Object.keys(el) === Object.keys(a)
    //         ? data // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
    //         : el // 기존의 값을 그대로 유지
    //   ),
    // });

    this.state.selectedStyle.map((el) =>
      el.keys === Object.keys(a)
        ? console.log("순회 a 맞아")
        : console.log("아니")
    );

    console.log(data);
    console.log(Object.keys(a));
  };

  sort_by = (field, reverse, primer) => {
    const key = primer
      ? function (x) {
          return primer(x[field]);
        }
      : function (x) {
          return x[field];
        };

    reverse = !reverse ? 1 : -1;

    return function (a, b) {
      return (a = key(a)), (b = key(b)), reverse * ((a > b) - (b > a));
    };
  };

  render() {
    const { styleList, typeOfTea, price, sortBy, product } = this.state;

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
            <FilterSelectBox
              id="style"
              name="Style"
              list={styleList}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="typeOfTea"
              name="Type of Tea"
              list={typeOfTea}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="price"
              name="Price"
              list={price}
              handleClick={this.handlefilterClick}
            />
            <FilterSelectBox
              id="sortby"
              name="Sort by:"
              list={sortBy}
              handleClick={this.handleSort}
            />
          </div>
          <section>
            <ul className="productitemList">
              {product.map((el) => {
                return <ProductItem key={el.product_id} data={el} />;
              })}
            </ul>
          </section>
          <div className="bottom">
            <span>
              Showing {1}-{20} of {20} results
            </span>
            {/* btn 활성화 조건 넣기  */}
            {/* <button>Load next</button> */}
            <Link onClick={() => window.scrollTo(0, 0)}>Back to Top</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
