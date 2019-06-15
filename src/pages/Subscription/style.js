import styled from "styled-components";

import BackgroundImage from "../../assets/img/1.jpg";

export const BackgroundSection = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-position: center;
  background-size: cover;
`;

export const ImageHolder = styled.div`
  padding: 25px 0 0 335px;
  img {
    height: 50px;
  }
`;

export const SubscriptionContent = styled.div`
  display: flex;
  padding: 25px 0 0 347px;
  width: 85%;
  height: 300px;
  color: white;
`;

export const MusicIntro = styled.div`
  width: 50%;
  margin-right: 65px;
`;

export const SubscriptionPlans = styled.div`
  width: 40%;
`;

export const MusicDesc = styled.p`
  font-size: 13px;
`;

export const MusicOptions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

export const Music = styled.div`
  div {
    background-color: #bbb;
    display: inline-block;
    width: 60px;
    height: 60px;
    background-color: #1a1a1a;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: ${props => (props.primary ? "23px" : "20px")};
      height: ${props => (props.primary ? "20px" : "21px")};
    }
  }
`;

export const NormalPlans = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
`;

export const ProPlans = styled.div`
  width: 100%;
  height: 50%;
  background: #1a1a1a;
  margin-top: 12px;
  position: relative;
  overflow: hidden;
`;

export const FreePlan = styled.div`
  width: 48%;
  height: 100%;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
`;
export const SilverPlan = styled.div`
  width: 48%;
  height: 100%;
  background: #1a1a1a;
  position: relative;
  overflow: hidden;
`;

export const Circle = styled.div`
  position: absolute;
  top: ${props => (props.primary ? "-96px" : "-25px")};
  right: ${props => (props.primary ? "-85px" : "-27px")};
  background-color: #505050;
  display: inline-block;
  width: ${props => (props.primary ? "200px" : "90px")};
  height: ${props => (props.primary ? "200px" : "90px")};
  border-radius: 50%;
  p {
    position: absolute;
    top: ${props => (props.primary ? "105px" : "32px")};
    right: ${props => (props.primary ? "121px" : "42px")};
    font-size: ${props => (props.primary ? "25px" : "18px")};
    font-weight: bold;
  }
  span {
    position: absolute;
    top: ${props => (props.primary ? "145px" : "50px")};
    right: ${props => (props.primary ? "112px" : "40px")};
    font-size: ${props => (props.primary ? "17px" : "15px")};
    font-weight: normal;
  }
`;

export const PlanHead = styled.h5`
  font-size: 13.5px;
  padding: 25px 10px;
  font-weight: bold;
  p {
    position: absolute;
    bottom: 0;
    font-size: ${props => (props.primary ? "13px" : "10px")};
    margin-bottom: ${props => (props.primary ? "15px" : "5px")};
    font-weight: normal;
  }
`;

export const PlanPrice = styled.span`
  font-size: 25px;
  position: absolute;
  bottom: 38px;
  left: 13px;
  span {
    font-size: 15px;
    font-weight: normal;
  }
`;
