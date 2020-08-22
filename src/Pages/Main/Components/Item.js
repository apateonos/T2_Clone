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
      <div className={"itemBox " + BoxStyle}>
        {console.log(itemImage)}
        <ItemImage
          imgType={imgType}
          itemName={itemName}
          itemImage={itemImage}
        />
        <div className="itemnoteBox">
          <div className="itemTextBox">
            <ItemName itemName={itemName} />
            <ItemDESC itemDESC={itemDESC} />
          </div>
          <ItemButton buttonList={buttonList} />
        </div>
      </div>
    );
  }
}

export default Item;
