import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import axios from "axios";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import AccountKit from "react-facebook-account-kit";
import Modal from "react-bootstrap/Modal";
import ScrollArea from "react-scrollbar";
import CreateModal from "./UI/CreateAccountModal/Modal";
const styles = { height: 400, width: "100%" };

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      showCreateAccount: false,
      userdata: null,
      UserProfileData: [],
      Language: "en"
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentWillMount() {
    var userdata = localStorage.getItem("UserAccessToken");
    // localStorage.removeItem('UserAccessToken');
    // if (userdata === null) {
    //     this.setState({
    //         show: true
    //     })
    // }
  }
  handleClose = () => {
    this.setState({ show: false });
  };
  logout = () => {
    localStorage.removeItem("UserAccessToken");
    NotificationManager.success("Successfully Logout");
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  LanguageChange = type => {
    this.setState({
      Language: type
    });
    localStorage.setItem("LanguageType", type);
    console.log(type);
  };
  success = responsedata => {
    axios
      .post("https://test.veenamusiconline.com/api/v1/login/social", {
        provider: "google",
        access_token: responsedata.accessToken,
        email: responsedata.profileObj.email,
        token_type: "Bearer",
        name: responsedata.profileObj.name
      })
      .then(res => {
        console.log(res);
        console.log(res.data.data.token);
        if (res.status === 200) {
          localStorage.setItem("UserAccessToken", res.data.data.token);
          this.setState({
            show: false,
            UserProfileData: res
          });
          NotificationManager.success("Successfully Login");
        } else {
          NotificationManager.warning("Something Went Wrong!!", 3000);
        }
      });
  };

  facebookResponse = resp => {
    console.log("hiiii response received" + resp);
  };
  failure = response => {
    console.log(response);
  };

  createAccountHandler = () => {
    this.handleClose();
    setTimeout(() => {
      this.setState(preState => {
        return { showCreateAccount: !this.state.showCreateAccount };
      });
    }, 500);
  };

  render() {
    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
      this.success(response);
    };
    return (
      <>
        <header>
          <div className="logo">
            <a href="javascript:;">
              <img
                src={require("../assets/img/svg_image/logo.svg")}
                alt="log_image"
              />
            </a>
          </div>
          <ul className="header_search_section">
            <li className="search_bar">
              <input
                type="text"
                placeholder="search for songs,Artist,Playlist and More"
              />
              <a href="javascript:;" className="search_button">
                <img
                  src={require("../assets/img/svg_image/search_white_icon.svg")}
                  width="17px"
                  alt="seach_icon"
                />{" "}
                SEARCH
              </a>
            </li>
          </ul>
          <ul className="login_sign_up_section">
            <li>
              <div className="dropdown-notification">
                <a href="javascript:;">
                  <img
                    src={require("../assets/img/svg_image/notification.svg")}
                    alt="notification_icon"
                  />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="profile.html">No NOtification Available</a>
                  </li>
                  <li>
                    <a href="profile.html">No NOtification Available</a>
                  </li>
                  <li>
                    <a href="profile.html">No NOtification Available</a>
                  </li>
                </ul>
                <span className="notification-count">1</span>
              </div>
            </li>
            <li>
              <NavLink to={"/checkout"}>
                <img
                  src={require("../assets/img/svg_image/cart.svg")}
                  alt="checkout_image"
                />
              </NavLink>
            </li>
            <li>
              <div className="dropdown" style={{ marginRight: "80px" }}>
                <a
                  href="#login_open_modal"
                  className="login_button"
                  onClick={this.handleShow}
                >
                  LOGIN
                </a>
                <ul className="dropdown-menu" style={{ width: "100px" }}>
                  <li>
                    <a href="profile">
                      <span>
                        <img src={require("../assets/img/avatar.png")} alt="" />
                      </span>
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="address">
                      <span>
                        <img src={require("../assets/img/power.png")} alt="" />
                      </span>
                      My address
                    </a>
                  </li>
                  {this.state.Language === "en" ? (
                    <li onClick={() => this.LanguageChange("hi")}>
                      <a>
                        <span>
                          <img
                            src={require("../assets/img/power.png")}
                            alt=""
                          />
                        </span>
                        Hindi
                      </a>
                    </li>
                  ) : (
                    <li onClick={() => this.LanguageChange("en")}>
                      <a>
                        <span>
                          <img
                            src={require("../assets/img/power.png")}
                            alt=""
                          />
                        </span>
                        English
                      </a>
                    </li>
                  )}

                  <li>
                    <a href="javascript:;" onClick={this.logout}>
                      <span>
                        <img
                          src={require("../assets/img/power.png")}
                          alt="power_image"
                        />
                      </span>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </header>
        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <div id="login_open_modal" className="modalWindowlogin">
            <div className="modal-body" style={{ top: "56%" }}>
              <div className="modal-left-section">
                <img src={require("../assets/img/modal.png")} alt="" />
              </div>
              <div className="modal-right-section">
                <div className="modal-heading">
                  <h3>Login</h3>
                  <a
                    href="#ok"
                    title="Ok"
                    className="ok cross_img"
                    onClick={this.handleClose}
                  >
                    <img src={require("../assets/img/cross.png")} alt="" />
                  </a>
                  <p>India's Largest Rajasthani Music</p>
                </div>
                <div className="modal-content" style={{ borderWidth: "0px" }}>
                  <div className="otp-section">
                    <input
                      type="text"
                      name=""
                      placeholder="Enter Mobile Number"
                    />
                    <a href="javascript:;" className="send-button">
                      Send OTP
                    </a>
                  </div>
                  <AccountKit
                    appId="" // Update this!
                    version="v1.0" // Version must be in form v{major}.{minor}
                    onResponse={resp => console.log(resp)}
                    csrf={"csrf token here!"} // Required for security
                    countryCode={"+91"} // eg. +60
                    debug={true}
                    // loginType = "EMAIL"
                    emailAddress={"abc@gmail.com"} // eg. me@site.com
                  >
                    {p => (
                      <a {...p} href="javascript:;" className="ragister-button">
                        Register
                      </a>
                    )}
                  </AccountKit>
                  <div className="account-section">
                    <a
                      href="#"
                      onClick={this.createAccountHandler}
                      className="create-account-button"
                    >
                      Create Account ?
                    </a>
                    <a href="javascript:;" className="forgate-password-button">
                      Forget Password
                    </a>
                  </div>
                  <div className="social-login-section">
                    <p className="social-logins-link"> Social Login </p>
                    <ul>
                      <li>
                        <a href="javascript:;">
                          <img
                            src={require("../assets/img/facebook.png")}
                            alt="facebook_image"
                          />
                        </a>
                      </li>
                      <li>
                        <GoogleLogin
                          clientId="" //CLIENTID NOT CREATED YET
                          buttonText="LOGIN WITH GOOGLE"
                          render={renderProps => (
                            <img
                              src={require("../assets/img/google-plus.png")}
                              onClick={renderProps.onClick}
                              disabled={renderProps.disabled}
                              alt="google_image"
                            />
                          )}
                          onSuccess={responseGoogle}
                          onFailure={responseGoogle}
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
        {this.state.showCreateAccount ? (
          <CreateModal show={this.state.showCreateAccount} />
        ) : null}
        <NotificationContainer />
      </>
    );
  }
}

export default Header;
