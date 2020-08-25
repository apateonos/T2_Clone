import React, { Component } from "react";
import MainBanner from "./Components/MainBanner";
import Module from "./Components/Module";
import "./Main.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      featured: 0,
      shopthelook: 0,
      curatedForYou: 0,
      partnership: 0,
      teaLibrary: 0,
      discover: 0,
      findYourGift: 0,
      main: [],
      moduleList: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/main/main.json")
      .then((response) => response.json())
      .then((response) => this.setState({ moduleList: response.moduleList }));
  };

  click = (button, module) => {
    button === 1
      ? this.setState({ [module]: this.state[module] - 300 })
      : this.setState({ [module]: this.state[module] + 300 });
  };

  render() {
    return (
      <main>
        <MainBanner />
        <button onClick={this.click}></button>
        <div className="moduleList">
          {this.state.moduleList.map((el) => {
            return (
              <Module
                click={this.click}
                transform={this.state[el.moduleID]}
                moduleID={el.moduleID}
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
