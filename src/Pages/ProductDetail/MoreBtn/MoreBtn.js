import React, { Component } from "react";
import "./MoreBtn.scss";

class MoreBtn extends Component {
  constructor() {
    super();
    this.state = {
      // product_detail: [],
      isFold: false,
    };
  }

  render() {
    return (
      <span className="MoreBtn">
        <img
          alt="moreBtn"
          src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598285640573/images/down22.png"
          className={this.state.isFold && "rotateBtn"}
          onClick={this.props.clickMoreBtn}
        />
      </span>
    );
  }
}

export default MoreBtn;
