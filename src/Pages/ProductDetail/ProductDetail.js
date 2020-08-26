import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuantityBox from "./QuantityBox/QuantityBox";
import "./ProductDetail.scss";
import MoreBtn from "./MoreBtn/MoreBtn";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product_detail: [],
      isFold: false,
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/ProductDetail/ProductDetail.json")
      .then((res) => res.json())
      .then((res) => this.setState({ product_detail: res.product_detail }));
  }

  clickMoreBtn = () => {
    const { isFold } = this.state;
    this.setState({ isFold: !isFold });
  };

  // handleQuantityChange = (e) => {
  //   console.log(e.target.value);
  // };

  render() {
    const { product_detail, isFold } = this.state;
    const { clickMoreBtn } = this;

    return (
      <div className="ProductDetail">
        <header>
          <ul>
            <li>HOME</li>
            <li>TEA</li>
            {product_detail.map((el) => {
              return (
                <>
                  <li>{el.product_type}</li>
                  <li>{el.product_name}</li>
                </>
              );
            })}
          </ul>
        </header>
        <div className="sectionArea">
          <div className="sectionContainer">
            <section className="left">
              <div className="mainImg">
                {product_detail.map((el) => {
                  return <img alt="product" src={el.product_image}></img>;
                })}
              </div>
              <div className="subImg">
                <img
                  alt="product 1"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw344ddde6/images/products/2020 Aug/T135AE040_jam-on-toast_p2.png?sw=100&sh=100&sm=fit"
                />
                <img
                  alt="product 2"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwd5cc57fc/images/products/2020 Aug/T135AE040_jam-on-toast_p1.png?sw=100&sh=100&sm=fit"
                />
                <img
                  alt="product 3"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwfcfb83f8/images/products/2020 Aug/Jam_Mobile_1024x1024.png?sw=100&sh=100&sm=fit"
                />
              </div>
              <div className="sns">
                <span>Share</span>
                <img
                  alt="mail icon"
                  src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598285640573/images/icons/pdpsocial/PDP_Social_Icon_EML.png"
                />
              </div>
            </section>
            <section className="right">
              <div className="mainInfo">
                {product_detail.map((el) => {
                  return (
                    <>
                      <div className="productName">{el.product_name}</div>
                      <div className="price">A${el.product_price}</div>
                    </>
                  );
                })}
                <div className="review">
                  <span className="rating">
                    <span>★★★★★</span>
                    <span>4.8</span>
                    <span>(9)</span>
                  </span>
                  <span className="write">Write a review</span>
                </div>
              </div>
              <div className="subInfo">
                <QuantityBox
                // id="quantity"
                // name={1}
                // list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                // handleClick={this.handleQuantityChange}
                />
                <div className="productBtn">
                  <button className="addToBag">Add to bag</button>
                  <button className="findInStore">Find in store</button>
                </div>
                <div className="addToWishList">
                  <button>
                    <div className="heartImg"></div>
                    <span>Add to wishlist</span>
                  </button>
                </div>
              </div>
              <div className="tabInfo">
                {product_detail.map((el) => {
                  return (
                    <>
                      <div className="tab">
                        <span>Description</span>
                        <MoreBtn clickMoreBtn={clickMoreBtn} />
                      </div>
                      <div className="subTab">
                        <div className={!isFold ? "hideTab" : "showTab"}>
                          <div>{el.description}</div>
                        </div>
                      </div>
                      <div className="tab">
                        <span>Ingredients</span>
                        <MoreBtn clickMoreBtn={clickMoreBtn} />
                      </div>
                      <div className="subTab">
                        <div className={isFold ? "hideTab" : "showTab"}>
                          <div>{el.ingredients}</div>
                        </div>
                        <div></div>
                      </div>
                      <div className="tab">
                        <span>Brewing guide</span>
                        <MoreBtn clickMoreBtn={clickMoreBtn} />
                      </div>
                      <div className="subTab">
                        <div className={isFold ? "hideTab" : "showTab"}>
                          <div>
                            <img
                              alt="quantity"
                              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwe72e4d99/images/brewing-quantity.png"
                            />
                            <span>{el.brewing_quantity}</span>
                            <img
                              alt="time"
                              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw0539ea3b/images/brewing-time.png"
                            />
                            <span>{el.brewing_time}</span>
                            <img
                              alt="temp"
                              src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw18ddadb8/images/brewing-degrees.png"
                            />
                            <span>{el.brewing_temp}</span>
                          </div>
                        </div>
                      </div>
                      <div className="tab">
                        <span>Shippings & returns</span>
                        <MoreBtn clickMoreBtn={clickMoreBtn} />
                      </div>
                      <div className="subTab">
                        <div className={isFold ? "hideTab" : "showTab"}>
                          We ship anywhere in the world! Check out our delivery
                          and returns policy here.
                        </div>
                      </div>
                      <div className="tab">
                        <span>Customer Reviews</span>
                        <MoreBtn clickMoreBtn={clickMoreBtn} />
                      </div>
                      <div className="subTab">
                        <div></div>
                      </div>
                    </>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
