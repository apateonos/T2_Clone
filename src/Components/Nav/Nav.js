import React, { Component } from 'react';
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="rollingBanner">
          <div className="rollingBannerOne">
            <a href="#">Free shipping on orders of $50 or more</a>
          </div>
          {/* <div className="rollingBannerTwo">Contactless Click & Collect is now available | Find your nearest store here</div> */}
        </div>
        <nav>
          <div className="navBox">
            <div className="logo">
            <a href="#">
            <img alt="T2 logo" src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw815bd4ad/images/t2-logo.svg" />
            </a>
          </div>
            <div className="navContents">
            <div className="navInfo">
              <button>
                <span>Deliver to</span>
                <span><img alt="country" src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwc9e20260/images/country_KR.svg" /></span>
                <span>KOREA, REPUBLIC OF</span>
                <div className="icon"></div>
              </button>
              <ul>
                <li><a href="#">STORES</a></li>
                <li><a href="#">LOGIN</a></li>
                <li><a href="#">MY FAVOURITES</a></li>
              </ul>
            </div>
            <div className="emptyBar"></div>
            <div className="navMenu">
                <ul className="menuList">
                  <li><a href="#">Tea</a></li>
                  <li><a href="#">Teawares</a></li>
                  <li><a href="#">Gifts</a></li>
                  <li><a href="#">Sale</a></li>
                  <li><a href="#">Recipes</a></li>
                  <li><a href="#">Tea Society</a></li>
                  <li><a href="#">Partnerships</a></li>
                </ul>
                <ul className="icons">
                  <li><a href=""></a></li>
                  <li><a href=""></a></li>
                </ul> 
            </div>
          </div> 
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;