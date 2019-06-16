import React, { Component } from "react";
import { connect } from "react-redux";

import { DetailPage } from "./components/DetailPage";
import Header from "../../component/Header";
import LeftSection from "../../component/LeftSection";
import RightSection from "../../component/RightSection";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import { MiddleSection, HeadingSection, ProductSection } from "./styles";
import { initProduct } from "../../store/actions";

class DetailsPage extends Component {
  componentDidMount() {
    if (this.props.productId) {
      this.props.onInitProduct(this.props.productId, this.props.prodType);
    } else {
      this.props.history.push("/");
    }
  }

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
            <DetailPage
              error={this.props.error}
              isLoading={this.props.isLoading}
              subscribed={this.subscribeHandler}
              productData={this.props.productData}
            />
          </ProductSection>
        </MiddleSection>
        {/* <RightSection /> */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  productId: state.str.getIn(["selectedProductId"]),
  productData: state.str.getIn(["productData"]),
  isLoading: state.str.getIn(["isLoading"]),
  error: state.str.getIn(["error"]),
  prodType: state.str.getIn(["type"])
});

const mapDispatchToProps = dispatch => ({
  onInitProduct: (data, id) => dispatch(initProduct(data, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);