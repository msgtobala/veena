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
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import ScrollArea from 'react-scrollbar';
import { Container, Row, Col } from 'reactstrap';
import ReactAudioPlayer from 'react-audio-player';
const styles = { height: 400, width: "100%" };

class RightSection extends Component{
    render(){
        return(
            <div className="right-section">
          <h5>Queue</h5>
          <ul className="queue-list">
            <li>
              <a href="javascript:;"> Rajasthani Song title
          <img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" />
              </a>
            </li>
            <li className="active">
              <a href="javascript:;">
                <img src={require("../assets/img/svg_image/play.svg")} className="left" />
                Best Veena Collection
          <img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" />
              </a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">Sad Songs</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">All Time Best</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
            <li>
              <a href="javascript:;">All Time Best</a><a href="javascript:;"><img src={require("../assets/img/svg_image/bar_icon.svg")} className="right" /></a>
            </li>
          </ul>
          <div className="advertisement-section">
          </div>
          <div id="jquery_jplayer_12" className="jp-jplayer"></div>
          <div id="jp_container_12" className="jp-audio audio_player" role="application" aria-label="media player">
            <div className="jp-type-playlist">
              <div className="player-top-setion">
                <div className="image-section">
                  <img src={require("../assets/img/songs.png")} />
                </div>
                <div className="text-section">
                  <h4>Lamberghini</h4>
                  <p>Lamberghini</p>
                </div>
                <div className="bar-icon"><a href="javascript:;">
                  <img src={require("../assets/img/bar_icon-dark.svg")} />
                </a></div>
              </div>
              {/* <div className="jp-gui jp-interface">
                <div className="jp-time-holder">
                  <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                  <div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
                </div>
                <div className="jp-controls">
                  <div className="jp-progress">
                    <div className="jp-seek-bar">
                      <div className="jp-play-bar"></div>
                    </div>
                  </div>
                  <div className="jp-toggles">
                    <button className="jp-shuffle" role="button" tabIndex="0">shuffle</button>
                    <button className="jp-repeat" role="button" tabIndex="0" style={{ float: "right" }}>repeat</button>
                  </div>
                  <button className="jp-previous" role="button" tabIndex="0">previous</button>
                  <button className="jp-play" role="button" tabIndex="0">play</button>
                  <button className="jp-next" role="button" tabIndex="0">next</button>
                </div>
              </div> */}
              <ReactAudioPlayer
                    src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
                    autoPlay
                    controls
                    style={{width: "65%",marginTop: "20%"}}
                />
              <div className="jp-playlist" style={{ display: "none" }}>
                <ul>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <div className="jp-no-solution">
                <span>Update Required</span>
                To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" target="_blank">Flash plugin</a>.
              </div>
            </div>
          </div>
        </div>
        )
    }
}

export default RightSection;