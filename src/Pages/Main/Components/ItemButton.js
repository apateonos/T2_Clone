import React, { Component } from "react";

class ItemButton extends Component {
  render() {
    const { buttonList }= this.props;
    return (
      <div className="itemButtonBox">
        {console.log(buttonList)}
        { buttonList.map(el =><button className="itemButton">{el}</button>) }
      </div>
    );
  }
}

export default ItemButton;