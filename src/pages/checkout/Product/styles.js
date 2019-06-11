import styled from "styled-components";

export const OptionImage = styled.img`
  box-sizing: border-box;
`;
export const ProductDetails = styled.div``;

export const Product = styled.div`
  background-color: white;
  margin-bottom: 10px;
  padding: ${props => props.history ? "14px 18px 14px 8px" : "8px 18px 8px 8px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    img {
      width: 20%;
      height: 178px;
    }
    ${OptionImage} {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
    ${ProductDetails} {
      width: 80%;
      padding-left: 25px;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const ProductTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
export const DeliveredOn = styled.p`
  margin: 0;
  color: #a3a6a8;
  font-size: 13px;
`;
export const Price = styled.span`
  color: #4ea75c;
  font-weight: bold;
  font-size: 16.5px;
`;
export const OriginalPrice = styled.span`
  color: #a3a6a8;
  text-decoration: line-through;
  font-size: 16px;
`;

export const ItemWrapper = styled.p`
  margin-bottom: 0;
`;

export const PriceWrapper = styled(ItemWrapper)`
  color: #a3a6a8;
  font-size: 13px;
`;

export const ShippingPrice = styled.span`
  color: #5f5f61;
  font-weight: bold;
`;

export const DeliveryBy = styled(ShippingPrice)`
  font-weight: bold;
`;

export const ReturnCondition = styled.div`
  width: unset;
  padding: unset;
  font-size: 15px;
`;

export const DeliveryWrapper = styled.p`
  margin-bottom: 4.2rem;
`;

export const OrderNo = styled.span`
  font-weight: bold;
  font-size: 12.5px;
  color: black;
`;

export const OrderWrapper = styled(DeliveryWrapper)`
  margin: 46px 0 20px 0;
`;


export const OrderPrice = styled(Price)`
  color: #414141;
  font-weight: normal;
  font-size: 16px;
`;

export const TrackOrderButtons = styled.div`
  align-self: flex-start;
`;

export const TrackOrder = styled.button`
  color: ${props => props.primary ? "#414141" : "white"};
  background-color: ${props => props.primary ? "white" : "#414141"};
  border-radius: 200px;
  outline: none !important;
  border: ${props => props.primary ? "1px solid #414141" : "none"};
  margin-right: ${props => props.primary ? "" : "15px"};
  padding: 8px 18px;
  font-weight: bold;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;