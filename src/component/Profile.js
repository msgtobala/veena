import React, { Component } from "react";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import GoogleLogin from "react-google-login";
import AccountKit from "react-facebook-account-kit";
import Header from "./Header";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      edit: false
    };
  }

  facebookResponse = resp => {
    console.log("hiiii response received" + resp);
  };
  failure = response => {
    console.log(response);
  };

  editProfileHandler = () => {
    this.setState(prevState => {
      return { edit: !prevState.edit };
    });
  };
  render() {
    return (
      <>
        <Header />
        <LeftSection />
        <div className="middle-section">
          <div className="image-and-button-section">
            <div className="profile-left-section">
              <div className="img-section">
                <img
                  src={require("../assets/img/profile.jpg")}
                  alt="profile_image"
                />
              </div>
              <h4>Natasha Marya</h4>
              <p>natashamarya@gmail.com</p>
            </div>
            <div className="profile-right-section">
              <button
                href="#"
                className="shop-cart-button"
                style={{ right: "-30px", outline: "none", border: "none" }}
              >
                <div className="text">
                  <span className="count">90 DAYS</span>
                  <span className="Name">REMAIN</span>
                </div>
                <span className="img-section">
                  <img
                    src={require("../assets/img/svg_image/cart-white.svg")}
                    alt="cart_image"
                  />
                </span>
              </button>
              <div className="button-section">
                <button
                  onClick={this.editProfileHandler}
                  className="track-order-button"
                  style={{ marginRight: "18px", outline: "none" }}
                >
                  Edit Profile
                </button>
                <button className="download-invoice-button">Upgrade Now</button>
              </div>
            </div>
          </div>
          <div className="general-details-section" style={{ height: "auto" }}>
            <h2>General Details</h2>
            <div className="edit-details-section">
              <div className="general-left-sec">
                <p>Name</p>
                <input
                  type="text"
                  style={{
                    cursor: !this.state.edit ? "not-allowed" : "auto"
                  }}
                  value="Rahul Kumar Sahu"
                  disabled={!this.state.edit}
                />
                <p>Email</p>
                <input
                  style={{
                    cursor: !this.state.edit ? "not-allowed" : "auto"
                  }}
                  type="text"
                  value="asd"
                  disabled={!this.state.edit}
                />
              </div>
              <div className="general-right-sec">
                <p>Phone No.</p>
                <input
                  style={{
                    cursor: !this.state.edit ? "not-allowed" : "auto"
                  }}
                  type="text"
                  value="Rahul Kumar Sahu"
                  disabled={!this.state.edit}
                />
                <p>DOB</p>
                <input
                  type="date"
                  value=""
                  disabled={!this.state.edit}
                  style={{
                    cursor: !this.state.edit ? "not-allowed" : "auto"
                  }}
                />
              </div>
            </div>
            {this.state.edit ?  <button style={{
              margin: "12px 0",
              background: "#ea0a8c",
              padding: "13px 54px",
              color: "white",
              border: "none",
              borderRadius: "25px"
            }} onClick={this.saveAddress}>SAVE</button> : null}
          </div>
        </div>
        {/* <RightSection/> */}
      </>
    );
  }
}

export default Profile;
