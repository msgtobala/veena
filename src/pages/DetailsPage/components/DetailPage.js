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

export const DetailPage = (props) => {
  return (
    <DetailWrapper>
      <ImageWrapper>
        <img src={ProductImage} alt="product_image" />
      </ImageWrapper>
      <ProductWrapper>
        <div>
          <ProductHead>Colourful Rajasthani Songs</ProductHead>
          <ProductDesc>Best Rajathani Albums</ProductDesc>
        </div>
        <ProductDetails>
          Reprehenderit commodo enim occaecat consectetur ex adipisicing qui.
          Cillum culpa amet et esse laborum. Cillum tempor cillum fugiat tempor.
          Cupidatat voluptate commodo in minim anim sit. Amet ea magna labore id
          aliquip nisi nostrud occaecat veniam fugiat minim Lorem amet ipsum.
          Irure Lorem eiusmod cupidatat mollit in id cillum ea fugiat ea aute.
          Et anim duis nulla magna esse.
        </ProductDetails>
        <ProductCost>
          <span>$3746.00/-</span>&nbsp;&nbsp;
          <span>4528.00/-</span>
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
    </DetailWrapper>
  );
};
