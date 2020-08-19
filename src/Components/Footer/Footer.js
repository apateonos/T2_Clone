import React, { Component } from 'react';
import "./Footer.scss"

class Footer extends Component {
  render() {
    return (
      <>
        <div className="teaSocietyBanner">
          <div className="">
            <video autoplay muted playsinline loop  src="https://cdn.intelligencebank.com/au/share/NOrD/e3oNW/vvAy3/webm/FA+animated+logo_1583847446"></video>
          </div>
          <div className="textBox">
            <div className="textTitle">Tea Society</div>
            <div className="textDescription">The T2 Tea Society is home to our community of passionate like-minded sippers. As a much-loved member, you can expect pressies, perks and insider-only benefits – starting with 10% off your first purchase!</div>
          </div>
          <button>Sign up & take 10% off your first order</button>
        </div>
        <div className="bCorpBanner">
          <div className="textBox">
            div.banner
            Your favourite tea is now B Corp certified. We are now proudly part of a global community of over 3,000 companies doing business that puts people and place first.</div>
          <button>Our B Corp accreditation</button>
        </div>
        <footer>
          <div className="leftFooter">
            <ul>
            <li>Tea Society</li>
            <li>Store Finder</li>
            <li>Gift Cards</li>
            <li>UNIDAYS</li>
            <li>Careers</li>
            <li>Site Map</li>
          </ul>
            <dl>
            <dt>About Us</dt>
            <dd>T2 Purpose</dd>
            <dd>T2 Planet</dd>
            <dd>T2 People</dd>
            <dd>T2 Product</dd>
            <dd>B Corp</dd>
            <dd>Privacy Policy</dd>
            <dd>Terms of Use</dd>
          </dl>
            <dl>
            <dt>Customer Care</dt>
            <dd>Contact Us</dd>
            <dd>FAQs</dd>
            <dd>Delivery</dd>
            <dd>Returns & refunds</dd>
            <dd>Payment methods</dd>
            <dd>Subscription</dd>
            <dd>Coronavirus COVID-19 Updates</dd>
          </dl>
            <dl>
            <dt>WholeSale</dt>
            <dd>PartnerShips</dd>
            <dd>Corporate Gifting</dd>
            <dd>Stockists</dd>
            <dd>Partner Login</dd>
          </dl>
          </div>
          <div className="rightFooter">
            <div className="slogan">A cup for me. A cup for you. T2</div>
            <ul>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
              <li><a href=""></a></li>
            </ul>
            <div className="note">
              <p>Tea Too acknowledges the Traditional Custodians of the land on which we operate, live and gather as employees, and recognise their continuing connection to land, water and community. We pay respect to Elders past, present and emerging.</p>
              <div className="copyright">© 2020 Tea Too Pty Ltd.</div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;