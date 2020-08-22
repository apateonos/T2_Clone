import React, { Component } from "react";

class ModuleAside extends Component {
  render() {
    const { moduleAside, asideDESC } = this.props;
    console.log(moduleAside);
    return (
      <div className="moduleAside">
        <h3 className="asideName">{moduleAside}</h3>
        <div className="asideImage"></div>
        <div className="asideDESC">{asideDESC}</div>
      </div>
    );
  }
}

export default ModuleAside;
