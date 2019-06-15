import React, { Component } from "react";

import { DetailPage } from "./components/DetailPage";
import Header from "../../component/Header";
import LeftSection from "../../component/LeftSection";
import RightSection from "../../component/RightSection";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { MiddleSection, HeadingSection, ProductSection } from "./styles";

class DetailsPage extends Component {
  subscribeHandler = () => {
    this.props.history.push("/subscribe");
  };
  render() {
    return (
      <>
        <Header />
        <LeftSection />
        <NotificationContainer />
        <MiddleSection>
          <HeadingSection>
            <ul>
              <li>
                <a href="/">Veena</a>
              </li>
              <li class="active">
                <a href="/">Product Detail</a>
              </li>
            </ul>
          </HeadingSection>
          <ProductSection>
            <DetailPage subscribed={this.subscribeHandler} />
          </ProductSection>
        </MiddleSection>
        {/* <RightSection /> */}
      </>
    );
  }
}

export default DetailsPage;
