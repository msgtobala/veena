import styled from "styled-components";

export const DetailWrapper = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 3px;
  padding: 15px 0 0 20px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const ImageWrapper = styled.div`
  width: 30%;
  text-align: center;
  img {
    /* width: 180px;
    height: 284px; */
  }
`;

export const ProductWrapper = styled.div`
  flex: 1;
  padding-left: 40px;
  margin-top: 54px;
  > div {
    padding-right: 180px;
  }
`;

export const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  background-color: #ea0a8c;
  width: 160px;
  height: 52px;
  font-size: 14px;
  text-align: center;
  position: absolute;
  right: 0px;
  top: 42px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;

  & > div:first-child {
    display: flex;
    flex-direction: column;
    padding: 5px 6px 5px 25px;
    span:first-child {
      display: inline-block;
      padding: 0;
      margin: 0;
      line-height: 20px;
      font-weight: bold;
      font-size: 17px;
    }
    span:last-child {
      font-size: 15px;
      color: white;
      line-height: 20px;
    }
  }
  div:last-child {
    width: 50%;
    img {
      width: 35px;
      height: 35px;
    }
  }
`;

export const ProductHead = styled.h4`
  color: #505050;
  font-size: 18px;
`;

export const ProductDesc = styled.span`
  color: #7f8c8d;
  font-size: 15px;
`;

export const ProductDetails = styled.p`
  font-size: 15px;
  color: #7f8c8d;
  text-align: justify;
  margin: 10px 53px 22px 0;
`;

export const ProductCost = styled.div`
  margin-top: 12px;
  & span {
    color: #7f8c8d;
    font-size: 18px;
    text-decoration: line-through;
  }
  & span:first-child {
    color: #27ae60;
    font-size: 22px;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const ShippingCost = styled.p`
  color: #bdc3c7;
  margin-bottom: 0;
`;

export const ActionButtons = styled.div`
  margin: 20px 0 30px 0;
  padding: 0 !important;
  & button {
    outline: none;
    font-weight: bold;
    color: white;
    font-size: 15px;
    border: 1.5px solid #ea0a8c;
    border-radius: 25px;
    padding: 8px 20px;
    background: #ea0a8c;
  }
  & button:last-child {
    color: #2c3e50;
    padding: 8px 50px;
    background-color: white;
    border: 1.5px solid #2c3e50;
    margin-left: 30px;
  }
`;
