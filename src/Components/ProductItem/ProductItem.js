import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ProductItem.scss";

class ProductItem extends Component {
  constructor() {
    super();
  }

  handleClick = (e) => {
    console.log(e);
    console.log("click!");
  };

  render() {
    const { product } = this.props;
    return (
      <li className="ProductItem">
        <div className="heartBox">
          <Link>
            <img
              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1597816184082/images/heart.svg"
              alt="heart"
            />
            <div></div>
          </Link>
        </div>
        <div className="imageBox">
          <img src={product.url} alt={product.name} />
        </div>
        <div className="productInfo">
          <Link className="productName">{product.name}</Link>
          <div className="ratingBox">
            <img alt="starRatings" src={product.rating} />
            (3)
          </div>
          <>
            <Link className="viewDetail">View details</Link>
          </>
          <ul className="productVariation">
            {product.Variation.map((el) => {
              return (
                <li key={el.name}>
                  <button
                    className="variationImgButton"
                    name={el.name}
                    onClick={() => {
                      this.handleClick(el.name); //set.status 하기
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
