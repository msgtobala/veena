import React, { Component } from "react";

import Header from "../../component/Header";
import LeftSection from "../../component/LeftSection";
import RightSection from "../../component/RightSection";
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
  NoProduct
} from "./style";
import PaySection from "./PaySection/PaySection";
import {ProductInfo} from "./Product/Product";
import shippingIcon from "../../assets/img/shiping.jpg";

class Checkout extends Component {
  state = {
    products: null
  };

  componentDidMount() {
    let updatedProducts = [
      {
        productId: 1,
        productName: "Veena Tamil Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      },
      {
        productId: 2,
        productName: "Veena Rajasthani Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      },
      {
        productId: 3,
        productName: "Veena punjabi Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      },
      {
        productId: 4,
        productName: "Veena English Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      },
      {
        productId: 5,
        productName: "Veena Malayalam Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      },
      {
        productId: 6,
        productName: "Veena Arani Music Albums Included all in One",
        deliveredOn: "08-Jan-2019",
        price: "546.00",
        originalPrice: "876.00",
        shippingPrice: "20",
        deliveryBy: "20th Feb"
      }
    ];
    this.setState({ products: updatedProducts });
  }

  getAmount() {
    let thisState = this.state.products;
    let totalPrice = 0;
    for (const key in thisState) {
      if (thisState[key].price) {
        totalPrice = totalPrice + parseFloat(thisState[key].price);
      }
    }
    return totalPrice.toFixed(2);
  }

  render() {
    let products = null;
    if (this.state.products === null) {
    } else if (this.state.products.length === 0) {
      products = <NoProduct>No Products In Cart</NoProduct>;
    } else if (this.state.products) {
      products = this.state.products.map(product => (
        <ProductInfo key={product.id} product={product} />
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
                <a href="/">Checkout</a>
              </li>
            </ul>
            <ItemWrapper>
              <ItemCount>
                {this.state.products ? this.state.products.length : "No"} Items
              </ItemCount>{" "}
              in your bag
            </ItemWrapper>
          </HeadingSection>
          <CheckoutSection>
            <h2>Your Products</h2>
            <DeliverySection>
              <div>
                <img src={shippingIcon} alt="delivery_image" />
                <DeliveryPinCode>
                  {" "}
                  Deliver to&nbsp;<ItemCount> 621012</ItemCount>
                </DeliveryPinCode>
              </div>
              <div>
                <ChangeAddressButton>Change</ChangeAddressButton>
              </div>
            </DeliverySection>
            <Products>{products}</Products>
          </CheckoutSection>
          {this.state.products ? (
            <PaySection productPrice={this.getAmount()} />
          ) : null}
        </MiddleSection>
        {/* <RightSection /> */}
      </>
    );
  }
}

export default Checkout;
