import React, { Component } from "react";

class MainBanner extends Component {
  render() {
    return (
      <div className="mainBannerBox">
        <video src="Images/Main/mainbanner2.mp4" autoPlay muted loop />
        <div className="whiteBox"></div>
      </div>
    );
  }
}

export default MainBanner;
