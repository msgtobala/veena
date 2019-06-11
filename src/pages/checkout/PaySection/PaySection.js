import React from "react";

import {
    Checkout,
    AmountSection,
    CheckoutButton,
    AmountHead,
    AmountPrice
} from "./style";

export const PaySection = (props) => {
    let paySectionTemplate = null;

    if (props.productPrice) {
        paySectionTemplate = (
            <Checkout>
                <AmountSection>
                    <AmountHead>Total Amount</AmountHead>
                    <AmountPrice>{props.productPrice}/-</AmountPrice>
                </AmountSection>
                <CheckoutButton>CONTINUE TO PAY</CheckoutButton>
            </Checkout>
        );
    }
    return paySectionTemplate;
}

export default PaySection;