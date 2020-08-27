import React, { Component } from "react";
import "./Cart.scss";
import CardItem from "./CardItem";

class Cart extends Component {
  state = {
    message: [
      {
        ordering_number: 1,
        name: "100% Organic Matcha",
        image:
          "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw2cba5a78/images/T110AI012_matcha-black-tin_p1.png?sw=55&sh=55&sm=fit",
        unit: "Tin 30g-1.1oz",
        count: 92,
        price: "2484.00",
      },
      {
        ordering_number: 2,
        name: "100% Organic Matcha",
        image:
          "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwe989f3ae/images/products/T110AI029_matcha_sha1.png?sw=100&sh=100&sm=fit",
        unit: "Tin 50g-1.7oz",
        count: 4,
        price: "176.00",
      },
      {
        ordering_number: 3,
        name: "Apple Maple Muffin Loose Leaf Feature Cube",
        image:
          "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw1815455f/images/products/2020 Aug/T115AE120_apple-maple-muffin_p2.png?sw=262&sh=262&sm=fit",
        count: 2,
        price: "52.00",
      },
      {
        ordering_number: 4,
        name: "The Quiet Mind Loose Leaf Feature Cube",
        image:
          "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw4038cfa3/images/products/2211/T140AE217_the-quiet-mind_p2.png?sw=262&sh=262&sm=fit",
        count: 5,
        price: "100.00",
      },
    ],
    open: false,
  };

  handleButton = (id) => {
    let newData = this.state.message.filter((el) => el.ordering_number !== id);
    this.setState({ message: newData }, () => {});
  };

  handleClickOpen = () => {
    this.setState({ open: false });
  };

  handleClickOff = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <div className="Cart">
        <div
          className={`background ${
            this.state.open ? "displayGray" : "background"
          }`}
        />
        <div
          className={`miniCartBox ${
            this.state.open ? "displayNone" : "miniCartBox"
          }`}
        >
          <div className="headTitle">
            <h5>Shopping bag</h5>
            <span> propducts</span>
            <button onClick={this.handleClickOff} className="clear">
              <img
                className="Xbox"
                src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598372268490/images/close-black.svg"
                alt=""
              />
            </button>
          </div>
          <div className="cartTable">
            {this.state.message.map((el) => (
              <CardItem
                name={el.name}
                img={el.image}
                ordering_number={el.ordering_number}
                unit={el.unit}
                count={el.count}
                price={el.price}
                handleButton={this.handleButton}
              />
            ))}
          </div>
          <div className="totalBox">
            <div className="subTotalList">
              <div className="subTotal">Subtotal</div>
              <div className="subTotalPrice">A$26.00</div>
            </div>
            <div className="deliveryBox">
              <div className="delivery">ESTImated delivery</div>
              <div className="deliveryFree">Free</div>
            </div>
            <div className="totalResult">
              <div className="total">
                Total
                <span>(Tax included)</span>
              </div>
              <div className="totalPrice">A$180.00</div>
            </div>
            <div className="buttonBox">
              <button className="proceed">
                <span></span>
                Proceed
                <img
                  src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598372268490/images/arrow_3.png"
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
        <button onClick={this.handleClickOpen} className="onButton">
          onbutton
        </button>
      </div>
    );
  }
}

export default Cart;
