import styled from "styled-components";

export const MiddleSection = styled.div`
  width: 60vw;
  background-color: #f2f2f2;
  height: 100vh;
  padding: 0 20px;
  padding-top: 100px;
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeadingSection = styled.div`
  border-bottom: 1px solid rgba(65, 65, 65, 0.2);
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  ul {
    padding: 0px;
    margin: 0px;

    li {
      list-style-type: none;
      display: inline-block;
      font-size: 16px;
      margin-bottom: 10px;
      margin-right: 35px;
      font-weight: 500;
      position: relative;
      color: #414141;

      :last-child::before {
        content: "";
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: -20px;
        background-color: #414141 !important;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      a {
        text-decoration: none;
        color: inherit;
        display: block;
      }
    }

    li.active {
      color: #a3a6a8;
    }
  }
`;

export const ItemWrapper = styled.p`
  margin-bottom: 0;
`;

export const ItemCount = styled.span`
  font-weight: bold;
`;

export const CheckoutSection = styled.div`
  h2 {
    font-size: 24px;
    margin: 20px 0px 10px 0px;
  }
`;

export const DeliverySection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: white;
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const DeliveryPinCode = styled.span`
  display: inline-block;
  font-size: 14.5px;
  color: #a3a6a8;
  margin: 12px;
  font-weight: bold;
  & ${ItemCount} {
    color: black;
    font-size: 15.5px;
  }
`;

export const ChangeAddressButton = styled.button`
  background-color: white;
  color: #ea0a8c;
  border-radius: 200px;
  padding: 10px 35px;
  outline: none;
  border: 1px solid #ea0a8c;
  max-width: 150px;
`;

export const Products = styled.div`
    margin-bottom:  65px;
`;

export const NoProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #a3a6a8;
  margin: 18px 0;
`;