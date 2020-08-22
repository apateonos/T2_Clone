import React, { Component } from "react";

class ItemImage extends Component {
  render() {
    const { imgType, itemName, itemImage } = this.props;

    console.log(imgType);
    return (
      <div className="itemImage">
        {imgType === "video" ? (
          <video src={itemImage} autoPlay muted loop />
        ) : (
          <img alt={itemName} src={itemImage} />
        )}
      </div>
    );
  }
}

export default ItemImage;
