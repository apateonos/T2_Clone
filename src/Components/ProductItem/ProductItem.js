import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { config } from "./../../config";
import QuantityBox from "./QuantityBox/QuantityBox";
import "./ProductItem.scss";

class ProductItem extends Component {
  constructor() {
    super();

    this.state = {
      selectItem: 0,
      isWishList: false,
      quantity: 1,
      isQuantityClick: false,
      wishIdList: [],
    };
  }

  handleHeartClick = () => {
    const { isWishList } = this.state;
    const { data } = this.props;

    fetch(`${config.api}/user/wishlist`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
      body: JSON.stringify({
        product_id: data.product_id,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // if (res.message.is_wished) {
        //   this.setState({
        //     wishIdList: [...this.state.wishIdList, res.message.product_id],
        //   });
        // }
        this.setState({ isWishList: !isWishList });
      });
  };

  handleOptionClick = (idx) => {
    this.setState({ selectItem: idx });
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  handleSubmit = () => {
    const { selectItem, quantity } = this.state;
    const { data } = this.props;
    const size_unit = data.size_unit[selectItem];
    const result = {};

    result["product_id"] = data.product_id;
    result["count"] = quantity;

    if (size_unit) {
      result["size_unit"] = data.size_unit[selectItem];
    } else {
      result["size_unit"] = -1;
    }
    console.log("Add to Bag", data.product_id);
    console.log(result);

    fetch(`${config.apiWishlist}/user/shoppingbag`, {
      method: "POST",
      headers: {
        Authorization: sessionStorage.getItem("login_token"),
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    const { data } = this.props;
    const { isWishList, quantity, selectItem } = this.state;
    const {
      handleHeartClick,
      handleOptionClick,
      handleQuantityChange,
      handleSubmit,
    } = this;

    return (
      <li className="ProductItem">
        <div className="heartBox">
          <button onClick={handleHeartClick}>
            <div className={isWishList ? "heartImgCheck" : "heartImg"} />
          </button>
        </div>
        <div className="imageBox">
          <Link to="/shop">
            <img src={data.product_image} alt={data.product_name} />
          </Link>
        </div>
        <div className="productInfo">
          <Link to="/shop" className="productName">
            {data.product_name}
          </Link>
          <div className="ratingBox">
            <img alt="starRatings" src={data.review_img} />
            <div className="reviewCount"> {`(${data.review_count})`}</div>
          </div>
          <>
            <Link to="/shop" className="viewDetail">
              View details
            </Link>
          </>
          <ul className="productVariation">
            {data.product_price && (
              <li>
                <button className="variationImgButton borderBlack">
                  <img alt="" src={data.product_image} />
                </button>
                <div className="variationName"></div>
                <div className="price">A${data.product_price}</div>
              </li>
            )}
            {!data.product_price &&
              data.size_unit.map((el, idx) => {
                return (
                  <li key={el}>
                    <button
                      className={`variationImgButton ${
                        selectItem === idx ? `borderBlack` : `borderNone`
                      }`}
                      onClick={() => {
                        handleOptionClick(idx);
                      }}
                    >
                      <img alt={data.size_unit} src={data.size_image[idx]} />
                    </button>
                    <div className="variationName">{el}</div>
                    <div className="price">A${data.size_price[idx]}</div>
                  </li>
                );
              })}
          </ul>
          <div className="addTobagBox">
            <QuantityBox
              id="quantity"
              name={quantity}
              list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              handleClick={handleQuantityChange}
            />
            <button onClick={handleSubmit}>Add to Bag</button>
          </div>
        </div>
        <div className="removeForm">
          <button
            onClick={() => {
              this.props.onClickRemove(data.product_id);
            }}
          >
            <span className="removeIcon"></span>
            Remove
          </button>
        </div>
      </li>
    );
  }
}

export default withRouter(ProductItem);
