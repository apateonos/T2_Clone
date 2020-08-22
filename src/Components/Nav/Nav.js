import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Nav.scss";

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="rollingBanner">
          <ul>
            <li>Free shipping on orders of $50 or more</li>
            <li>Contactless Click & Collect is now available | Find your nearest store here</li>
          </ul>
        </div>
        <div className="searchBar">
          <div className="searchBarContainer">
            <form action="">
              <input type="text" placeholder="I'm looking for..."/>
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
            <img alt="T2 logo" src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw815bd4ad/images/t2-logo.svg" />
            </Link>
          </div>
            <div className="navContents">
            <div className="navInfo">
              <button>
                <span>Deliver to</span>
                <img alt="country" src="https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwc9e20260/images/country_KR.svg" />
                <span>KOREA, REPUBLIC OF</span>
                <span className="icon"></span>
              </button>
              <ul>
                <li><Link>STORES</Link></li>
                <li><Link>LOGIN</Link></li>
                <li><Link>MY FAVOURITES</Link></li>
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