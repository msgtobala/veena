import React from "react";

import {
  DetailWrapper,
  ImageWrapper,
  ProductWrapper,
  CountWrapper,
  ProductHead,
  ProductDesc,
  ProductDetails,
  ProductCost,
  ShippingCost,
  ActionButtons
} from "./styles";
import ProductImage from "../../../assets/img/product-image.png";
import MusicImage from "../../../assets/img/svg_image/play_white.svg";
import Loader from "../../../component/UI/Loader/Loader";

const ORIGINAL_PRICE = 1000;
export const DetailPage = props => {
  let detailTemplate = <Loader />;
  if (props.isLoading === false && props.error === true) {
    detailTemplate = <h4 style={{
      width: "100%",
      textAlign: "center"
    }}>Product Unavailable</h4>;
  } else if (props.productData) {
    detailTemplate = (
      <>
        <ImageWrapper>
          <img src={ProductImage} alt="product_image" />
        </ImageWrapper>
        <ProductWrapper>
          <div>
            <ProductHead>{props.productData.name.en}</ProductHead>
            <ProductDesc>{props.productData.description.en}</ProductDesc>
          </div>
          <ProductDetails>
            Reprehenderit commodo enim occaecat consectetur ex adipisicing qui.
            Cillum culpa amet et esse laborum. Cillum tempor cillum fugiat
            tempor. Cupidatat voluptate commodo in minim anim sit. Amet ea magna
            labore id aliquip nisi nostrud occaecat veniam fugiat minim Lorem
            amet ipsum. Irure Lorem eiusmod cupidatat mollit in id cillum ea
            fugiat ea aute. Et anim duis nulla magna esse.
          </ProductDetails>
          <ProductCost>
            <span>Rs.{props.productData.price}/-</span>&nbsp;&nbsp;
            <span>Rs.{ORIGINAL_PRICE.toFixed(2)}/-</span>
          </ProductCost>
          <ShippingCost>20Rs/- Shipping charges</ShippingCost>
          <ActionButtons>
            <button>Buy Now</button>
            <button onClick={props.subscribed}>Subscribe Veena</button>
          </ActionButtons>
        </ProductWrapper>
        <CountWrapper>
          <div>
            <span>25</span>
            <span>songs</span>
          </div>
          <div>
            <img src={MusicImage} alt="music_images" />
          </div>
        </CountWrapper>
      </>
    );
  }
  return <DetailWrapper>{detailTemplate}</DetailWrapper>;
};
