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
const styles = { height: 400, width: "100%" };

class LeftSection extends Component {
    render() {
        return (
            <div className="left-section" >
                <h5>Browse</h5>
                <ul className="site-navigation"   >
                    <li className="active">
                        <a href="/"> <img src={require("../assets/img/svg_image/mp3_song_icon.svg")} /> Music</a>
                    </li>
                    <li>
                        <a href="/videos"> <img src={require("../assets/img/svg_image/videos.svg")} /> Videos</a>
                    </li>
                    <li>
                        <a href="/shop"><img src={require("../assets/img/svg_image/shop_icon.svg")} />Shop</a>
                    </li>
                </ul>
                <h5>My Playlist</h5>

                <ul className="playlist-holder" style={{ overflow: "auto" }}>

                    <li>
                        <a href="javascript:;"> Rajasthani Song title</a>
                    </li>
                    <li className="active">
                        <a href="javascript:;"> <img src={require("../assets/img/svg_image/play.svg")} /> Best Veena Collection</a>
                    </li>
                    <li><a href="javascript:;">Sad Songs</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">Sad Songs</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>
                    <li><a href="javascript:;">Sad Songs</a></li>
                    <li><a href="javascript:;">All Time Best</a></li>

                </ul>

            </div>
        )
    }
}

export default LeftSection;