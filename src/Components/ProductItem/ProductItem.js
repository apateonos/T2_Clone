import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: [],
      isWishList: false,
    };
  }

  componentDidMount() {
    const { product } = this.props;
    let arr = [];
    for (let i; i < product.Variation.length; i++) {
      arr.push(false);
    }
    arr[0] = true;
    this.setState({
      isActive: arr,
    });
  }
  handleHeartClick = () => {
    const { isWishList } = this.state;
    this.setState({ isWishList: !isWishList });
    console.log(this.props.product);
  };

  handleClick = (idx) => {
    const { isActive } = this.state;

    let arr = Array.from({ length: isActive.length }, () => false);
    arr[idx] = true;

    this.setState({ isActive: arr });
  };

  render() {
    const { product } = this.props;
    const { isWishList } = this.state;
    const { handleHeartClick } = this;
    return (
      <li className="ProductItem">
        <div className="heartBox">
          <button onClick={handleHeartClick}>
            <div className={isWishList ? "heartImgCheck" : "heartImg"} />
          </button>
        </div>
        <div className="imageBox">
          <Link to="/shop">
            <img src={product.url} alt={product.name} />
          </Link>
        </div>
        <div className="productInfo">
          <Link to="/shop" className="productName">
            {product.name}
          </Link>
          <div className="ratingBox">
            <img alt="starRatings" src={product.rating} />
            (3)
          </div>
          <>
            <Link to="/shop" className="viewDetail">
              View details
            </Link>
          </>
          <ul className="productVariation">
            {product.Variation.map((el, idx) => {
              return (
                <li key={el.name}>
                  <button
                    className={`variationImgButton ${
                      this.state.isActive[idx] ? `borderBlack` : `borderNone`
                    }`}
                    name={el.name}
                    id={el.name}
                    onClick={() => {
                      this.handleClick(idx);
                    }}
                  >
                    <img alt="" src={el.url} />
                  </button>
                  <div className="variationName">{el.name}</div>
                  <div className="price">A${el.price}</div>
                </li>
              );
            })}
          </ul>
          <div className="addTobagBox">
            <select>
              <option value="1">1</option> <option value="2">2</option>
              <option value="3">3</option> <option value="4">4</option>
              <option value="5">5</option> <option value="6">6</option>
              <option value="7">7</option> <option value="8">8</option>
            </select>
            <button>Add to Bag</button>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductItem;
