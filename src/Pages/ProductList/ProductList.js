import React, { Component } from "react";
import ProductItem from "./../../Components/ProductItem/ProductItem";
import "./ProductList.scss";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      product: [
        {
          url:
            "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw77631367/images/products/2020 Aug/T125AE281_blueberry-crumble_p2.png?sw=262&sh=262&sm=fit",
          name: "Blueberry Cruble Loose Leaf Feature Cube",
          rating:
            "https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dwa0a93cd3/images/stars/rating-4_8.gif",
          Variation: [
            {
              name: "",
              price: "26.0",
              url:
                "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw77631367/images/products/2020 Aug/T125AE281_blueberry-crumble_p2.png?sw=80&sh=80&sm=fit",
            },
          ],
        },
        {
          url:
            "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw5c3ae3cb/images/UXProject/new-tea-images/T110AI012_matcha_r1.jpg?sw=262&sh=262&sm=fit",
          name: " 100% Certified Organic Matcha",
          rating:
            "https://www.t2tea.com/on/demandware.static/Sites-UNI-T2-APAC-Site/-/default/dw3147e413/images/stars/rating-4_6.gif",
          Variation: [
            {
              name: "Tin 30g-1.1oz",
              price: "26.00",
              url:
                "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dw2cba5a78/images/T110AI012_matcha-black-tin_p1.png?sw=55&sh=55&sm=fit",
            },
            {
              name: "Tin 50g-1.7oz",
              price: "44.0",
              url:
                "https://www.t2tea.com/dw/image/v2/AASF_PRD/on/demandware.static/-/Sites-masterCatalog_t2/default/dwe989f3ae/images/products/T110AI029_matcha_sha1.png?sw=80&sh=80&sm=fit",
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="ProductList">
        <div className="productContainer">
          <header>
            <ul>
              <li>HOME</li>
              <li>TEA</li>
              <li>SHOP ALL TEA</li>
            </ul>
            <div className="mainHeading">Shop all Tea</div>
          </header>
          <div className="refineByContainer">Refine by:</div>
          <section>
            <ul>
              {this.state.product.map((el) => {
                return <ProductItem product={el} key={el.name} />;
              })}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductList;
