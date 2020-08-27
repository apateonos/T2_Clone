import React, { Component } from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "red" }}
      // style={{
      //   backgroundImage:
      //     "https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/en_AU/v1598427800341/images/pdp-right.png",
      // }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class MainImgSlider extends Component {
  render() {
    const settings = {
      // dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    //console.log(this.props.product_detail[0]);

    const { product_detail } = this.props;

    return (
      <div className="MainImgSlider">
        {/* {product_detail.product_image_big && ( */}
        <Slider {...settings}>
          {/* <div>
            {this.props.product_detail.product_image &&
              this.props.product_detail.product_image.map((el) => {
                return <img alt="product" src={el} />;
              })}
          </div> */}
          {/* {product_detail.product_image_big.map((el, idx) => {
              return (
                <div key={idx}>
                  <img alt="product" src={el} />
                </div>
              );
            })} */}
          <div>
            <img
              alt="mainImg"
              src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw1815455f/images/products/2020 Aug/T115AE120_apple-maple-muffin_p2.png?sw=555&sh=555&sm=fit"
            />
          </div>
          <div>
            <img
              alt="mainImg"
              src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw1c74c431/images/products/2020 Aug/T115AE120_apple-maple-muffin_p1.png?sw=555&sh=555&sm=fit"
            />
          </div>
          <div>
            <img
              alt="mainImg"
              src="https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw6918da87/images/products/2020 Aug/Apple_Mobile_1024x1024.png?sw=555&sh=555&sm=fit"
            />
          </div>
          {/* <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div> */}
        </Slider>
      </div>
    );
  }
}
