import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.15);
  }
`;

export const DropDown = styled.div`
  position: absolute;
  background-color: white;
  display: block;
  top: 28px;
  padding: 8px 21px;
  right: -5px;
  width: 165px;
  z-index: 10;
  border-radius: 2px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  a {
    text-decoration: none;
  }
  animation: ${bounce} 3s cubic-bezier(0.3, 0, 0.7, 1) forwards 2s;
`;
