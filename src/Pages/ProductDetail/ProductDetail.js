import React, { Component } from "react";
import { Link } from "react-router-dom";
import QuantityBox from "../../Components/ProductItem/QuantityBox/QuantityBox";
import "./ProductDetail.scss";
import MoreBtn from "./MoreBtn/MoreBtn";
import MainImgSlider from "./MainImgSlider/MainImgSlider";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      product_detail: [],
      isFold: "",
      imgNum: 0,
      quantity: 1,
    };
  }
  componentDidMount() {
    //fetch("http://localhost:3000/Data/ProductDetail/ProductDetail.json")
    fetch("http://10.58.7.91:8000/products/463")
      .then((res) => res.json())
      .then((res) => this.setState({ product_detail: res.product_detail }));

    // .then((res) => console.log(res));
  }

  clickMoreBtn = (name) => {
    this.state.isFold === name
      ? this.setState({ isFold: "" })
      : this.setState({ isFold: name });
  };

  handleQuantityChange = (e) => {
    this.setState({ quantity: e.target.value });
  };

  render() {
    console.log(this.state.isFold);

    const { product_detail, isFold, quantity } = this.state;
    const { clickMoreBtn, clickHandler, handleQuantityChange } = this;

    return (
      <div className="ProductDetail">
        <header>
          <ul>
            <li>HOME</li>
            <li>TEA</li>
            {/* {product_detail.map((el) => { */}
            {/* return ( */}
            {/* <> */}
            <li>{product_detail.product_type}</li>
            <li>{product_detail.product_name}</li>
            {/* </> */}
            {/* ); */}
            {/* })} */}
          </ul>
        </header>
        <div className="sectionArea">
          <div className="sectionContainer">
            <section className="left">
              <div className="mainImg">
                {/* {product_detail.map((el) => {
                    return <img alt="product" src={el.product_image}></img>;
                })} */}
                <MainImgSlider product_detail={product_detail} />
              </div>
              <div className="subImg">
                {/* {product_detail.product_image &&
                  product_detail.product_image.map((el, idx) => {
                    return <img key={idx} alt="subImg" src={el} />;
                  })} */}
                <img
                  onClick={clickHandler}
                  alt="product 1"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw1815455f/images/products/2020 Aug/T115AE120_apple-maple-muffin_p2.png?sw=100&sh=100&sm=fit"
                />
                <img
                  onClick={clickHandler}
                  alt="product 2"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw1c74c431/images/products/2020 Aug/T115AE120_apple-maple-muffin_p1.png?sw=100&sh=100&sm=fit"
                />
                <img
                  onClick={clickHandler}
                  alt="product 3"
                  src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw6918da87/images/products/2020 Aug/Apple_Mobile_1024x1024.png?sw=100&sh=100&sm=fit"
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
                {/* {product_detail.map((el) => { */}
                {/* return ( */}
                {/* <> */}
                <div className="productName">{product_detail.product_name}</div>
                <div className="price">
                  A$
                  {product_detail.product_price === null
                    ? product_detail.size_price[0]
                    : product_detail.product_price}
                </div>
                {/* </> */}
                {/* ); */}
                {/* })} */}
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
                  id="quantity"
                  name={quantity}
                  list={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                  handleClick={handleQuantityChange}
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
                {/* {product_detail.map((el) => { */}
                {/* return ( */}
                {/* <> */}
                <div className="tab">
                  <span>Description</span>
                  <MoreBtn
                    // className={isFold === "Description" ? "rotateBtn" : ""}
                    clickMoreBtn={() => clickMoreBtn("Description")}
                  />
                </div>
                <div className="subTab">
                  <div
                    className={isFold === "Description" ? "showTab" : "hideTab"}
                  >
                    <div>{product_detail.description}</div>
                  </div>
                </div>
                <div className="tab">
                  <span>Ingredients</span>
                  <MoreBtn clickMoreBtn={() => clickMoreBtn("Ingredients")} />
                </div>
                <div className="subTab">
                  <div
                    className={isFold === "Ingredients" ? "showTab" : "hideTab"}
                  >
                    <div>{product_detail.ingredients}</div>
                  </div>
                </div>
                <div className="tab">
                  <span>Brewing guide</span>
                  <MoreBtn clickMoreBtn={() => clickMoreBtn("Brewing guide")} />
                </div>
                <div className="subTab">
                  <div
                    className={
                      isFold === "Brewing guide" ? "showTab" : "hideTab"
                    }
                  >
                    <div>
                      <img
                        alt="quantity"
                        src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwe72e4d99/images/brewing-quantity.png"
                      />
                      <span>{product_detail.brewing_quantity}</span>
                      <img
                        alt="time"
                        src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw0539ea3b/images/brewing-time.png"
                      />
                      <span>{product_detail.brewing_time}</span>
                      <img
                        alt="temp"
                        src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw18ddadb8/images/brewing-degrees.png"
                      />
                      <span>{product_detail.brewing_temp}</span>
                    </div>
                  </div>
                </div>
                <div className="tab">
                  <span>Shippings & returns</span>
                  <MoreBtn
                    clickMoreBtn={() => clickMoreBtn("Shippings & returns")}
                  />
                </div>
                <div className="subTab">
                  <div
                    className={
                      isFold === "Shippings & returns" ? "showTab" : "hideTab"
                    }
                  >
                    <div>
                      We ship anywhere in the world! Check out our delivery and
                      returns policy here.
                    </div>
                  </div>
                </div>
                <div className="tab">
                  <span>Customer Reviews</span>
                  <MoreBtn
                    clickMoreBtn={() => clickMoreBtn("Customer Reviews")}
                  />
                </div>
                <div
                  className={
                    isFold === "Customer Reviews" ? "showTab" : "hideTab"
                  }
                >
                  <div></div>
                </div>
                {/* </> */}
                {/* ); */}
                {/* })} */}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
