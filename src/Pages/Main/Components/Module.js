import React         from "react";
import { Component } from "react";
import ModuleHead from "./ModuleHead";
import ModuleAside from "./ModuleAside";
import Item from "./Item";

class Module extends Component {
  render() {
    const { moduleStyle, moduleName, moduleAside, moduleItemList }= this.props;
    return (
      <div className={"module "+moduleStyle}>
        <ModuleHead moduleName={moduleName}/>
        <ModuleAside moduleAside={moduleAside}/>
        <div className="moduleItemList">
          {moduleItemList.map(el => <Item
            itemNum={el.itemNum}
            itemName={el.itemName}
            itemImage={el.itemImage}
            itemDESC={el.itemDESC}
            buttonList={el.buttonList}
          />)}
        </div>
      </div>
    );
  }
}

export default Module;