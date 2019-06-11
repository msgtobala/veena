import React from "react";

import {
  Product,
  ProductTitle,
  DeliveredOn,
  Price,
  OriginalPrice,
  ShippingPrice,
  DeliveryBy,
  ReturnCondition,
  OptionImage,
  ProductContainer,
  ProductDetails,
  PriceWrapper,
  DeliveryWrapper,
  OrderWrapper,
  OrderNo,
  OrderPrice,
  TrackOrder,
  TrackOrderButtons,
  DetailsWrapper
} from "./styles";

import productImage from "../../../assets/img/product-image.png";
import OptionImages from "../../../assets/img/svg_image/bar_icon.svg";

export const ProductInfo = props => {
  return (
    <Product>
      <ProductContainer>
        <img src={productImage} alt="product_imagesss" />
        <ProductDetails>
          <ProductTitle>{props.product.productName}</ProductTitle>
          <DeliveredOn>Delivered on {props.product.deliveredOn}</DeliveredOn>
          <DeliveryWrapper>
            <Price>${props.product.price}/-&nbsp;</Price>{" "}
            <OriginalPrice>{props.product.originalPrice}/</OriginalPrice>
          </DeliveryWrapper>
          <div>
            <PriceWrapper>
              Shipping:{" "}
              <ShippingPrice>${props.product.shippingPrice}</ShippingPrice> |
              Delivery by <DeliveryBy>{props.product.deliveryBy}</DeliveryBy>
            </PriceWrapper>
            <ReturnCondition>Return And Cancellation Policy</ReturnCondition>
          </div>
        </ProductDetails>
      </ProductContainer>
      <div>
        <OptionImage src={OptionImages} alt="option_image" />
      </div>
    </Product>
  );
};

export const ProductTrack = props => {
  return (
    <Product history>
      <ProductContainer>
        <img src={productImage} alt="product_imagesss" />
        <ProductDetails>
          <DetailsWrapper>
            <div>
              <OrderNo>Order No.&nbsp;&nbsp;{props.product.orderNo}</OrderNo>
              <DeliveredOn>{props.product.orderedOn}</DeliveredOn>
            </div>
            <TrackOrderButtons>
              <TrackOrder>Track Order</TrackOrder>
              <TrackOrder primary>Download Invoice</TrackOrder>
            </TrackOrderButtons>
          </DetailsWrapper>
          <OrderWrapper>
            <ProductTitle>{props.product.order}</ProductTitle>
            <DeliveredOn>{props.product.deliveredOn}</DeliveredOn>
          </OrderWrapper>
          <OrderPrice>${props.product.price}/-&nbsp;</OrderPrice>{" "}
        </ProductDetails>
      </ProductContainer>
    </Product>
  );
};
