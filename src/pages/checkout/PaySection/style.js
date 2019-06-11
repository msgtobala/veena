import styled from "styled-components";

export const Checkout = styled.div`
  width: 56vw;
  height: 50px;
  box-sizing: border-box;
  background-color: white;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  display: flex;
  box-shadow: 3px -4px 9px -5px rgba(0, 0, 0, 0.75);
`;

export const AmountSection = styled.p`
  margin-bottom: 0;
  flex: 2;
  text-align: right;
  padding: 5px 18px;
`;

export const CheckoutButton = styled.button`
  color: white;
  background-color: #ea0a8c;
  flex: 1;
  outline: none;
  border: none;
  font-weight: bold;
  outline: none;
`;

export const AmountHead = styled.div`
  margin-bottom: 2px;
  font-size: 11px;
  font-weight: bold;
`;

export const AmountPrice = styled.span`
  font-size: 18px;
  color: #4ea75c;
  font-weight: bold;
`;
