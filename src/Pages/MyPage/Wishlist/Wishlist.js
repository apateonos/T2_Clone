import React, { Component } from "react";
import "./wishlist.scss";
import ProductItem from "../../../Components/ProductItem/ProductItem";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  //test용
  componentDidMount = () => {
    // "http://10.58.4.238:8000/products"
    fetch("http://localhost:3000/Data/product.json")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.product_list }));
  };

  handleRemove = (removeId) => {
    console.log(removeId);
    let newData = this.state.data.filter((el) => el.product_id !== removeId);
    this.setState({ data: newData });
  };

  render() {
    const { data } = this.state;
    return (
      <div className="Wishlist">
        <header className="wishlistHeader">My Wishlist</header>
        <section className="wishlistProduct">
          <ul>
            {data.map((el, idx) => (
              <ProductItem
                data={el}
                key={el.product_id}
                onClickRemove={this.handleRemove}
              />
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default Wishlist;
