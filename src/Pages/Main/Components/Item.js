import React         from "react";
import { Component } from "react";
import ItemImage     from "./ItemImage";
import ItemName      from "./ItemName";
import ItemDESC      from "./ItemDESC";
import ItemButton from "./ItemButton";

class Item extends Component {
  render() {
    const { itemNum, itemName, itemImage, itemDESC, buttonList }= this.props;
    return (
      <div className={"itemBox "+itemNum}>
        {console.log(itemImage)}
        <ItemImage itemName={itemName} itemImage={itemImage}/>
        <div className="itemTextBox">
          <ItemName  itemName={itemName}/>
          <ItemDESC  itemDESC={itemDESC}/>
          <ItemButton buttonList={buttonList}/>
        </div>
      </div>
    );
  }
}

export default Item;