import React, { Component } from "react";
import MainBanner from "./Components/MainBanner";
import Module from "./Components/Module";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      moduleList: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/main/main.json")
      .then((response) => response.json())
      .then((response) => this.setState({ moduleList: response.moduleList }));
  };

  render() {
    return (
      <main>
        <MainBanner />
        <div className="moduleList">
          {this.state.moduleList.map((el) => {
            return (
              <Module
                moduleStyle={el.moduleStyle}
                moduleName={el.moduleName}
                moduleAside={el.moduleAside}
                asideDESC={el.asideDESC}
                moduleItemList={el.moduleItemList}
              />
            );
          })}
        </div>
      </main>
    );
  }
}

export default Main;
