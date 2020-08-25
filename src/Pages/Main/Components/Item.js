import React, { Component } from "react";
import ItemImage from "./ItemImage";
import ItemName from "./ItemName";
import ItemDESC from "./ItemDESC";
import ItemButton from "./ItemButton";

class Item extends Component {
  render() {
    const {
      BoxStyle,
      imgType,
      itemName,
      itemImage,
      itemDESC,
      buttonList,
    } = this.props;

    return (
      <div className={"itemBox " + BoxStyle} style={{transform: "translateX("+this.props.transform+"px)"}} >
        <ItemImage
          imgType={imgType}
          itemName={itemName}
          itemImage={itemImage}
        />
        <div className="itemNoteBox">
          <div className="itemTextBox">
            <ItemName itemName={itemName} />
            <ItemDESC itemDESC={itemDESC} />
          </div>
          <ItemButton buttonList={buttonList} />
        </div>
      </div>
    )
  }
}

export default Item;
