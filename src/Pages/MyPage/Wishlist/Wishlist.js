import React, { Component } from "react";
import { config } from "./../../../../src/config";
import ProductItem from "../../../Components/ProductItem/ProductItem";
import "./wishlist.scss";

class Wishlist extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const headers = {
      Authorization: config.token,
    };
    fetch(`${config.apiWishlist}/user/wishlist`, { headers })
      .then((response) => response.json())
      .then((res) => this.setState({ data: res.product_list }));
  }

  handleRemove = (removeId) => {
    console.log(removeId);

    fetch(`${config.apiWishlist}/user/wishlist`, {
      method: "POST",
      headers: {
        Authorization: config.token,
      },
      body: JSON.stringify({
        product_id: removeId,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });

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
