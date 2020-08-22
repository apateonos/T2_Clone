import React, { Component } from "react";
import ModuleHead from "./ModuleHead";
import ModuleAside from "./ModuleAside";
import Item from "./Item";

class Module extends Component {
  render() {
    const {
      moduleStyle,
      moduleName,
      moduleAside,
      asideDESC,
      moduleItemList,
    } = this.props;
    console.log(moduleItemList[1].imageType);
    console.log(moduleAside);
    return (
      <div className={"module " + moduleStyle}>
        <ModuleHead moduleName={moduleName} />
        <div className="moduleMain">
          <ModuleAside moduleAside={moduleAside} asideDESC={asideDESC} />
          <div className="moduleItemList">
            {moduleItemList.map((el) => (
              <Item
                BoxStyle={el.itemBoxStyle}
                itemName={el.itemName}
                imgType={el.imageType}
                itemImage={el.itemImage}
                itemDESC={el.itemDESC}
                buttonList={el.buttonList}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Module;
