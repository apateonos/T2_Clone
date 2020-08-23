import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";
import MenuContent1 from "./MenuContent1/MenuContent1";
import MenuContent2 from "./MenuContent2/MenuContent2";
import MenuContent3 from "./MenuContent3/MenuContent3";
import MenuContent4 from "./MenuContent4/MenuContent4";
import MenuContent5 from "./MenuContent5/MenuContent5";
import MenuContent6 from "./MenuContent6/MenuContent6";
import MenuContent7 from "./MenuContent7/MenuContent7";

class Nav extends Component {
  state = {
    textIdx: 0,
    isShown: false,
    activeContent: 0,
  };

  componentDidMount() {
    setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 2500);
  }

  switchActiveContent = (idx) => {
    this.setState({ activeContent: idx });
  };

  showMenuContent = () => {
    this.setState({ isShown: true });
  };

  hideMenuContent = () => {
    this.setState({ isShown: false });
  };

  render() {
    let currentBannerText = bannerArr[this.state.textIdx % bannerArr.length];

    return (
      <div className="Nav">
        <div className="rollingBanner">
          <span>{currentBannerText}</span>
        </div>
        <div className="searchBar">
          <div className="searchBarContainer">
            <form action="">
              <input type="text" placeholder="I'm looking for..." />
              <button type="submit"></button>
            </form>
            <div className="closeButton">
              <svg viewBox="0 0 10 10" id="icon-close">
                <title>close</title>
                <polygon points="9.6 1.1 8.9 0.4 5 4.29 1.1 0.4 0.4 1.1 4.29 5 0.4 8.9 1.1 9.6 5 5.71 8.9 9.6 9.6 8.9 5.71 5 9.6 1.1"></polygon>
              </svg>
              <span>CLOSE</span>
            </div>
          </div>
        </div>
        <nav>
          <div className="navBox">
            <div className="logo">
              <Link>
                <img
                  alt="T2 logo"
                  src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw815bd4ad/images/t2-logo.svg"
                />
              </Link>
            </div>
            <div className="navContents">
              <div className="navInfo">
                <button>
                  <span>Deliver to</span>
                  <img
                    alt="country"
                    src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwc9e20260/images/country_KR.svg"
                  />
                  <span>KOREA, REPUBLIC OF</span>
                  <span className="icon"></span>
                </button>
                <ul>
                  <li>
                    <Link>STORES</Link>
                  </li>
                  <li>
                    <Link>LOGIN</Link>
                  </li>
                  <li>
                    <Link>MY FAVOURITES</Link>
                  </li>
                </ul>
              </div>
              <div className="emptyBar"></div>
              <div className="navMenu">
                <ul className="menuList">
                  {menuName.map((el, idx) => {
                    return (
                      <li
                        key={idx}
                        onMouseEnter={(e) => {
                          this.showMenuContent();
                          this.switchActiveContent(idx);
                        }}
                        onMouseLeave={this.hideMenuContent}
                      >
                        <a href="#">{el}</a>
                      </li>
                    );
                  })}
                </ul>
                <ul className="icons">
                  <li>
                    <button />
                  </li>
                  <li>
                    <a href="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className="MenuContent">
          <div
            onMouseEnter={this.showMenuContent}
            onMouseLeave={this.hideMenuContent}
          >
            {this.state.isShown && MenuContentList[this.state.activeContent]}
          </div>
        </div>
      </div>
    );
  }
}

const bannerArr = [
  "Free shipping on orders of $50 or more",
  "Contactless Click & Collect is now available | Find your nearest store here.",
];

const menuName = [
  "Tea",
  "Teawares",
  "Gifts",
  "Sale",
  "Recipes",
  "Tea Society",
  "Partnerships",
];

const MenuContentList = {
  0: <MenuContent1 />,
  1: <MenuContent2 />,
  2: <MenuContent3 />,
  3: <MenuContent4 />,
  4: <MenuContent5 />,
  5: <MenuContent6 />,
  6: <MenuContent7 />,
};

export default Nav;
