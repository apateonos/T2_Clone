import React, { Component } from 'react';

class ItemImage extends Component {
  render() {
    const { itemName, itemImage }= this.props;
    return (
      <div className="itemImage">
        <img alt={ itemName } src={ itemImage } />
      </div>
    );
  }
}

export default ItemImage;