import React, { Component } from "react";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import "../assets/js/main.js";
import axios from "axios";
import "../assets/js/plugins.js";
import { Player, ControlBar } from "video-react";
import InfiniteCarousel from "react-leaf-carousel";
import Header from "./Header";
import "../video-react.css";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Dropdown from "./UI/DownloadDropdown/DownloadDropdown";
import { VideoDetails, VideoControls, Holder } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const sources = {
  sintelTrailer: "http://media.w3.org/2010/05/sintel/trailer.mp4",
  bunnyTrailer: "http://media.w3.org/2010/05/bunny/trailer.mp4",
  bunnyMovie: "http://media.w3.org/2010/05/bunny/movie.mp4",
  test: "http://media.w3.org/2010/05/video/movie_300.webm"
};

class Videos extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      source: sources["bunnyTrailer"],
      VideoData: [],
      enableDownload: false
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.load = this.load.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
  }

  componentDidMount() {
    this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  componentWillMount() {
    var userdata = localStorage.getItem("UserAccessToken");
    if (userdata !== null) {
      console.log(" video not null", userdata);
      axios
        .get("http://139.59.69.231/api/v1/dashboard/video", {
          headers: { token: userdata }
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            console.log("resssss video", res.data.data);
            this.setState({
              VideoData: res.data.data,
              latest_albums: res.data.data.latest_albums
              //   trending_audio: res.data.data.trending_audio,
              //   popular_albums:  res.data.data.popular_albums,
              //   latest_albums: res.data.data.latest_albums,
            });
          } else {
            console.log("nai aaya");
          }
        });
    } else {
      console.log("null aaya hain", userdata);
    }
  }

  toggleDownload = () => {
    this.setState(prevState => {
      return {
        enableDownload: !prevState.enableDownload
      };
    });
  };

  handleStateChange(state, prevState) {
    this.setState({
      player: state
    });
  }

  play() {
    this.refs.player.play();
  }

  pause() {
    this.refs.player.pause();
  }

  load() {
    this.refs.player.load();
  }
  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.refs.player.getState();
      const currentTime = player.currentTime;
      this.refs.player.seek(currentTime + seconds);
    };
  }
  seek(seconds) {
    return () => {
      this.refs.player.seek(seconds);
    };
  }
  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const playbackRate = player.playbackRate;
      this.refs.player.playbackRate = playbackRate + steps;
    };
  }
  changeVolume(steps) {
    return () => {
      const { player } = this.refs.player.getState();
      const volume = player.volume;
      this.refs.player.volume = volume + steps;
    };
  }
  setMuted(muted) {
    return () => {
      this.refs.player.muted = muted;
    };
  }
  changeSource(name) {
    return () => {
      this.setState({
        source: sources[name]
      });
      this.refs.player.load();
    };
  }

  render() {
    return (
      <>
        <Header />
        <LeftSection />
        <div className="middle-section">
          <div
            id="jp_container_11"
            className="jp-video video-player-controller"
            role="application"
            aria-label="media player"
          >
            <Player ref="player" autoPlay>
              <source src={this.state.source} />
              <ControlBar autoHide={true} />
            </Player>
            <VideoDetails>
              <div>
                <h3>Pallo Latke</h3>
                <p>Rajasthani Dance Pallo Latake</p>
              </div>
              <VideoControls>
                <div>
                  <img
                    src={require("../assets/img/heart-dark.png")}
                    alt="heart_dark"
                  />
                </div>
                <Holder>
                  <img
                    src={require("../assets/img/svg_image/bar_icon-dark.svg")}
                    className="image-svg"
                    alt="icon_dark"
                    onClick={this.toggleDownload}
                  />
                  <Dropdown show={this.state.enableDownload} />
                </Holder>
              </VideoControls>
            </VideoDetails>
          </div>
          <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
            <h2>Recommended Albums</h2>
            <div className="album-slider">
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
                showSides={true}
                sidesOpacity={0.5}
                sideSize={0.1}
                slidesToScroll={3}
                slidesToShow={4}
                scrollOnDevice={true}
              >
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
                <div>
                  <div className="album-slider-item">
                    <img
                      src={require("../assets/img/slider/1.jpg")}
                      alt="slider_image"
                    />
                    <h6>Pallo Latke</h6>
                    <p>Kawar Jeet Singh</p>
                  </div>
                </div>
              </InfiniteCarousel>
            </div>
          </div>
          <div
            className="homepage-new-releases-songs-slider"
            style={{ marginTop: "3%" }}
          >
            <h2>Hot New Releases</h2>
            <div className="songs-slider">
              <div>
                <div className="song-details">
                  <div className="songs-slider-item">
                    <ul>
                      <li className="number">01</li>
                      <li className="song-image">
                        <img
                          src={require("../assets/img/songs.png")}
                          alt="slider_image"
                        />
                      </li>
                      <li className="songs-name">
                        <h6>Kuve Par Aekali-vol.1</h6>
                        <p>Bob Dylan</p>
                      </li>
                      <li className="songs-command">
                        <a href="javascript:;">
                          <img
                            src={require("../assets/img/svg_image/bar_icon.svg")}
                            alt="bar_icon_image"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="songs-slider-item">
                    <ul>
                      <li className="number">01</li>
                      <li className="song-image">
                        <img
                          src={require("../assets/img/songs.png")}
                          alt="song_image"
                        />
                      </li>
                      <li className="songs-name">
                        <h6>Kuve Par Aekali-vol.1</h6>
                        <p>Bob Dylan</p>
                      </li>
                      <li className="songs-command">
                        <a href="javascript:;">
                          <img
                            src={require("../assets/img/svg_image/bar_icon.svg")}
                            alt="bar_icon_image"
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

export default Videos;
