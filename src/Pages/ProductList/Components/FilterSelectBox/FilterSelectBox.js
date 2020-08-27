import React, { Component } from "react";
import "./filterSelectBox.scss";

class FilterSelectBox extends Component {
  constructor() {
    super();

    this.state = {
      isClick: false,
    };
  }

  handleCheck = (e) => {
    this.props.handleClick(e);
  };

  render() {
    const { isClick } = this.state;
    const { list, name } = this.props;
    return (
      <div className="FilterSelectBox">
        <label className="refineByName">
          <input
            type="checkbox"
            onClick={() => {
              this.setState({ isClick: !isClick });
            }}
          />
          {name}
          <div className="arrow"></div>
        </label>
        {isClick && (
          <ul>
            {list.map((el) => {
              return (
                <li key={el}>
                  <label>
                    <input
                      className="checkInput"
                      type="checkbox"
                      id={el}
                      name={name}
                      onClick={this.handleCheck}
                    />
                    <span className="customCheckBox"></span>
                    {el}
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default FilterSelectBox;
