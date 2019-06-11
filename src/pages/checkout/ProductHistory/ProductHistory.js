import React, { Component } from "react";

import Header from "../../../component/Header";
import LeftSection from "../../../component/LeftSection";
import RightSection from "../../../component/RightSection";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import {
  MiddleSection,
  HeadingSection,
  ItemCount,
  ItemWrapper,
  CheckoutSection,
  DeliverySection,
  ChangeAddressButton,
  DeliveryPinCode,
  Products,
  NoProduct,
  TrackOrder,
  TrackOrderButtons
} from "../style";
import {ProductTrack} from "../Product/Product";

class ProductHistory extends Component {
  state = {
    products: null
  };

  componentDidMount() {
    let updatedProducts = [
      {
        orderNo: "9qwB098623286",
        orderedOn: "04:12 PM Feb 2018",
        order: "Veena Rajasthani Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00"
      },
      {
        orderNo: "9qwB098623286",
        orderedOn: "04:12 PM Feb 2018",
        order: "Veena Rajasthani Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00"
      },
      {
        orderNo: "9qwB098623286",
        orderedOn: "04:12 PM Feb 2018",
        order: "Veena Rajasthani Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00"
      }
    ];
    this.setState({ products: updatedProducts });
  }

  render() {
    let products = null;
    if (this.state.products === null) {
    } else if (this.state.products.length === 0) {
      products = <NoProduct>No Products In Cart</NoProduct>;
    } else if (this.state.products) {
      products = this.state.products.map(product => (
        <ProductTrack key={product.id} product={product} />
      ));
    }
    return (
      <>
        <Header />
        <LeftSection />
        <NotificationContainer />
        <MiddleSection>
          <HeadingSection>
            <ul>
              <li>
                <a href="/">Veena</a>
              </li>
              <li class="active">
                <a href="/">Purchase History</a>
              </li>
            </ul>
          </HeadingSection>
          <CheckoutSection>
            <h2>Purchase History</h2>
            <Products>{products}</Products>
          </CheckoutSection>
        </MiddleSection>
      </>
    );
  }
}

export default ProductHistory;
