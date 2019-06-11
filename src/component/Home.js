import React, { Component } from "react";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import axios from "axios";
import RBCarousel from "react-bootstrap-carousel";
import InfiniteCarousel from "react-leaf-carousel";
import GoogleLogin from "react-google-login";
import AccountKit from "react-facebook-account-kit";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ScrollArea from "react-scrollbar";
import Header from "./Header";
import { Container, Row, Col } from "reactstrap";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import {
  NotificationContainer,
  NotificationManager
} from "react-notifications";
import "react-notifications/lib/notifications.css";

const styles = { height: 400, width: "100%" };
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: true,
      show: false,
      userdata: null,
      language: "En"
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    var userdata = localStorage.getItem("UserAccessToken");
    console.log("not null", userdata);
    axios
      .get("https://test.veenamusiconline.com/api/v1/dashboard/home")
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          this.setState({
            HomeData: res.data.data,
            trending_video: res.data.data.trending_video,
            trending_updates: res.data.data.trending_updates,
            trending_audio: res.data.data.trending_audio,
            popular_albums: res.data.data.popular_albums,
            trending_artist: res.data.data.trending_artist,
            latest_albums: res.data.data.latest_albums
          });
        } else {
          console.log("nai aaya");
        }
      });
    let language = localStorage.getItem("Language");
    console.log("language local storege", language);
    this.setState({
      language: language
    });
  }

  again() {
    var userdata = localStorage.getItem("UserAccessToken");
    console.log("not null", userdata);
    axios
      .get(
        "https://test.veenamusiconline.com/api/v1/dashboard/home"
        // { headers: { "token": userdata } }
      )
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("resssss", res.data.data);
          this.setState({
            HomeData: res.data.data,
            trending_video: res.data.data.trending_video,
            trending_updates: res.data.data.trending_updates,
            trending_audio: res.data.data.trending_audio,
            popular_albums: res.data.data.popular_albums,
            trending_artist: res.data.data.trending_artist,
            latest_albums: res.data.data.latest_albums
          });
        } else {
          console.log("nai aaya");
        }
      });
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  visiableOnSelect = active => {
    console.log(`visiable onSelect active=${active}`);
  };
  slideNext = () => {
    this.slider.slideNext();
  };
  slidePrev = () => {
    this.slider.slidePrev();
  };
  goToSlide = () => {
    this.slider.goToSlide(4);
  };
  autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? (
      undefined
    ) : (
      <span className="glyphicon glyphicon-glass" />
    );
    rightIcon = rightIcon ? (
      undefined
    ) : (
      <span className="glyphicon glyphicon-music" />
    );
    this.setState({ leftIcon, rightIcon });
  };

  setGender(event) {
    this.setState({
      language: event.target.value
    });
    localStorage.setItem("Language", event.target.value);
    window.location.reload();
    console.log(event.target.value);
    // this.again()
  }
  render() {
    let { language } = this.state;
    console.log("Language arri haib", language);
    let {
      HomeData,
      trending_audio,
      trending_artist,
      popular_albums,
      latest_albums,
      trending_updates,
      trending_video
    } = this.state;
    console.log("trending audio", trending_audio);
    console.log("homedata", HomeData);

    const responseFacebook = response => {
      console.log(response);
    };

    const responseGoogle = response => {
      console.log(response);
      this.success(response);
    };
    return (
      <>
        <Header />
        <LeftSection />
        <NotificationContainer />
        <div className="middle-section">
          <div style={{ weight: 400, color: "#ea0a8c" }}>Choose language</div>
          {this.state.language === "Hi" ? (
            <div
              onChange={this.setGender.bind(this)}
              style={{ marginBottom: 20 }}
            >
              <input
                type="radio"
                value="En"
                name="gender"
                style={{ marginLeft: 20 }}
              />{" "}
              English
            </div>
          ) : (
            <div
              onChange={this.setGender.bind(this)}
              style={{ marginBottom: 20 }}
            >
              <input
                type="radio"
                value="Hi"
                name="gender"
                style={{ marginLeft: 20 }}
              />{" "}
              Hindi
            </div>
          )}
          <div className="homepage-hero-silder">
            <div className="slider-class">
              {this.state.HomeData !== undefined ? (
                <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]}
                  arrows={true}
                  swipe={true}
                  dots={false}
                  showSides={false}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={1}
                  slidesToShow={2}
                  scrollOnDevice={true}
                  slidesSpacing={10}
                  responsive={true}
                >
                  {popular_albums.data.map((row, index) => (
                    <div key={index}>
                      <div className="album-slider-item">
                        <img
                          style={{ width: 350, height: 300 }}
                          src={row.cover_images[0].url}
                          alt=""
                        />
                        <div className="carousel-caption">Image</div>
                      </div>
                    </div>
                  ))}
                </InfiniteCarousel>
              ) : null}
            </div>
          </div>
          <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
            <h2>Recommended Albums</h2>
            <div className="album-slider">
              {this.state.popular_albums !== undefined ? (
                <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]}
                  dots={false}
                  showSides={false}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={3}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {trending_audio.data.map((row, index) => (
                    <div key={index}>
                      <div className="album-slider-item">
                        <img
                          src={row.album.cover_images[0].url}
                          style={{ height: 150, width: 150 }}
                          alt=""
                        />
                        <h6>{language === "En" ? row.name.en : row.name.hi}</h6>
                        {/* <p>Kawar Jeet Singh</p> */}
                      </div>
                    </div>
                  ))}
                </InfiniteCarousel>
              ) : null}
            </div>
          </div>
          <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
            <h2>Recommended Video</h2>
            <div className="album-slider">
              {this.state.trending_video !== undefined ? (
                <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]}
                  dots={false}
                  showSides={false}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={3}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {trending_video.data.map((row, index) => (
                    <div key={index}>
                      <div className="album-slider-item">
                        <img
                          src={row.album.cover_images[0].url}
                          style={{ height: 150, width: 150 }}
                          alt=""
                        />
                        <h6>{language === "En" ? row.name.en : row.name.hi}</h6>
                        {/* <p>Kawar Jeet Singh</p> */}
                      </div>
                    </div>
                  ))}
                </InfiniteCarousel>
              ) : null}
            </div>
          </div>

          <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
            <h2>New Releases</h2>
            <div className="album-slider">
              {this.state.trending_video !== undefined ? (
                <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]}
                  dots={false}
                  showSides={false}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={3}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {latest_albums.data.map((row, index) => (
                    // console.log("sgar",row.cover_images.length )

                    <div key={index}>
                      <div className="album-slider-item">
                        {row.cover_images.length !== 0 ? (
                          <img
                            src={row.cover_images[0].url}
                            style={{ height: 150, width: 150 }}
                            alt=""
                          />
                        ) : null}
                        <h6>{language === "En" ? row.name.en : row.name.hi}</h6>
                        {/* <p>Kawar Jeet Singh</p> */}
                      </div>
                    </div>
                  ))}
                </InfiniteCarousel>
              ) : null}
            </div>
          </div>
          <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
            <h2>Treding Artist</h2>
            <div className="album-slider">
              {this.state.trending_artist !== undefined ? (
                <InfiniteCarousel
                  breakpoints={[
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                      }
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3
                      }
                    }
                  ]}
                  dots={false}
                  showSides={false}
                  sidesOpacity={0.5}
                  sideSize={0.1}
                  slidesToScroll={3}
                  slidesToShow={4}
                  scrollOnDevice={true}
                >
                  {trending_artist.data.map((row, index) =>
                    row.photo !== null ? (
                      <div key={index}>
                        <div className="album-slider-item">
                          <img
                            src={row.photo.url}
                            style={{ height: 150, width: 150 }}
                            alt=""
                          />
                          <h6>
                            {language === "En" ? row.name.en : row.name.hi}
                          </h6>
                          {/* <p>Kawar Jeet Singh</p> */}
                        </div>
                      </div>
                    ) : null
                  )}
                </InfiniteCarousel>
              ) : null}
            </div>
          </div>
          <div
            className="homepage-new-releases-songs-slider"
            style={{ marginTop: "3%" }}
          >
            <h2>Hot New Releases</h2>
            <div className="songs-slider">
              <div>
                <div
                  className="song-details"
                  style={{ flexDirection: "column" }}
                >
                  <div className="songs-slider-item">
                    <ul>
                      <li className="number">01</li>
                      <li className="song-image">
                        <img src={require("../assets/img/songs.png")} alt="" />
                      </li>
                      <li className="songs-name">
                        <h6>Kuve Par Aekali-vol.1</h6>
                        <p>Bob Dylan</p>
                      </li>
                      <li className="songs-command">
                        <p href="javascript:;">
                          <img
                            src={require("../assets/img/svg_image/bar_icon.svg")}
                            alt=""
                          />
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="songs-slider-item">
                    <ul>
                      <li className="number">01</li>
                      <li className="song-image">
                        <img src={require("../assets/img/songs.png")} alt="" />
                      </li>
                      <li className="songs-name">
                        <h6>Kuve Par Aekali-vol.1</h6>
                        <p>Bob Dylan</p>
                      </li>
                      <li className="songs-command">
                        <a href="javascript:;">
                          <img
                            src={require("../assets/img/svg_image/bar_icon.svg")}
                            alt=""
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightSection />
      </>
    );
  }
}

export default Home;
