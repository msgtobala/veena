import styled, { keyframes } from "styled-components";

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex: 0 1 auto;
  width: 100%;
`;

const line_scale_pulse_out = keyframes`
  0%,
  100% {
    -webkit-transform: scaley(1);
    transform: scaley(1);
  }
  50% {
    -webkit-transform: scaley(0.4);
    transform: scaley(0.4);
  }
`;

export const LineScalePulseOut = styled.div`
  -webkit-font-smoothing: antialiased;
  color: #fff;
  text-rendering: optimizeLegibility;
  & > div {
    animation: ${line_scale_pulse_out} 0.9s -0.6s infinite cubic-bezier(0.85, 0.25, 0.37, 0.85);
    border-radius: 2px;
    margin: 2px;
    background-color: #2c3e50;
    width: 4px;
    height: 35px;
    display: inline-block;
  }
  & > div:nth-child(1),
  & > div:nth-child(5) {
    animation-delay: -0.2s !important;
  }
  & > div:nth-child(2),
  & > div:nth-child(4) {
    animation-delay: -0.4s !important;
  }
`;
