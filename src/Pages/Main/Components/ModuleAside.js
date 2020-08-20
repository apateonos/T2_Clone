import React, { Component } from "react";

class ModuleAside extends Component {
  render() {
    const { moduleName, moduleAside }= this.props;
    return (
      <div className="moduleAside">
        <div className="asideName"></div>
        <div className="asideImage"></div>
        <div className="asideDESC">{ moduleAside }</div>
      </div>
    );
  }
}

export default ModuleAside;