import React, { Component } from 'react';
import '../scss/style.css';
import '../scss/normalize.css';
import '../scss/main.css';
import '../scss/custome_audio_video_player.css';
import '../scss/jplayer.blue.monday.min.css';
import axios from 'axios';
import RBCarousel from "react-bootstrap-carousel";
import InfiniteCarousel from 'react-leaf-carousel';
import GoogleLogin from 'react-google-login';
import AccountKit from 'react-facebook-account-kit';
import Header from './Header';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
const styles = { height: 400, width: "100%" };

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true
    };
  }

  facebookResponse = (resp) => {
    console.log("hiiii response received" + resp);

  }
  failure = (response) => {
    console.log(response);

  }
  render() {

    let { leftIcon, rightIcon } = this.state;

    return (
      <>
        <Header />
        <LeftSection/>
        <div className="middle-section">
          <div className="image-and-button-section">
            <div className="profile-left-section">
              <div className="img-section">
                <img src={require("../assets/img/profile.jpg")} />
              </div>
              <h4>Natasha Marya </h4>
              <p>natashamarya@gmail.com</p>
            </div>
            <div className="profile-right-section">
              <a href="javascript:;" className="shop-cart-button" style={{ right: "-30px" }}>
                <div className="text">
                  <span className="count">90 DAYS</span>
                  <span className="Name">REMAIN</span>
                </div>
                <span className="img-section">
                  <img src={require("../assets/img/svg_image/cart-white.svg")} />
                </span>
              </a>
              <div className="button-section">
                <a href="javascript:;" className="track-order-button" style={{ marginRight: "18px" }}>Edit Profile</a>
                <a href="javascript:;" className="download-invoice-button">Upgrade Now</a>
              </div>
            </div>
          </div>
          <div className="general-details-section">
            <h2>General Details</h2>
            <div className="edit-details-section">
              <div className="general-left-sec">
                <p>Name</p>
                <input type="text" value="Rahul Kumar Sahu" />
                <p>Email</p>
                <input type="text" value="sahurahul145@gmail.com" />
              </div>
              <div className="general-right-sec">
                <p>Phone No.</p>
                <input type="text" value="Rahul Kumar Sahu" />
                <p>DOB</p>
                <input type="date" value="<?php echo date('04 /04 / 2019'); ?>" />
              </div>
            </div>
          </div>
        </div>

        <RightSection/>
        
      </>
    )
  }
}

export default Profile;