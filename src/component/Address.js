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

class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoplay: true
        };
    }
    
    render() {
        let { leftIcon, rightIcon } = this.state;
        
        return (
            <>
               <Header/>
               <LeftSection/>
                <div className="middle-section">
                    <div className="heading-section">
                        <ul>
                            <li><a href="javascript:;">Veena</a></li>
                            <li className="active"><a href="javascript:;"> Your Addresses</a></li>
                        </ul>
                    </div>
                    <div className="your-address-section">
                        <h2>Your Addresses</h2>
                        <ul>
                            <li>
                                <div className="image-section">
                                    <a href="add_address.php"><img src={require("../assets/img/add.png")} /></a>
                                    <h4>ADD ADDRESS</h4>
                                </div>

                            </li>
                            <li className="default-address">
                                <span className="defult">Default</span>
                                <h5>Akash Sahu</h5>
                                <address>
                                    <p>B-11</p>
                                    <p>Gali no.8 Tulsi nagar Shastri nagar</p>
                                    <p>JAIPUR, RAJASTHAN 302016</p>
                                    <p>India</p>
                                    <p>Phone number: 9828490319</p>
                                </address>
                                <div className="edit-delete-button-section">
                                    <a href="javascript:;">Edit</a>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <h5>Akash Sahu</h5>
                                <address>
                                    <p>B-11</p>
                                    <p>Gali no.8 Tulsi nagar Shastri nagar</p>
                                    <p>JAIPUR, RAJASTHAN 302016</p>
                                    <p>India</p>
                                    <p>Phone number: 9828490319</p>
                                </address>
                                <div className="edit-delete-button-section">
                                    <a href="javascript:;">Edit</a>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <h5>Akash Sahu</h5>
                                <address>
                                    <p>B-11</p>
                                    <p>Gali no.8 Tulsi nagar Shastri nagar</p>
                                    <p>JAIPUR, RAJASTHAN 302016</p>
                                    <p>India</p>
                                    <p>Phone number: 9828490319</p>
                                </address>
                                <div className="edit-delete-button-section">
                                    <a href="javascript:;">Edit</a>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <h5>Akash Sahu</h5>
                                <address>
                                    <p>B-11</p>
                                    <p>Gali no.8 Tulsi nagar Shastri nagar</p>
                                    <p>JAIPUR, RAJASTHAN 302016</p>
                                    <p>India</p>
                                    <p>Phone number: 9828490319</p>
                                </address>
                                <div className="edit-delete-button-section">
                                    <a href="javascript:;">Edit</a>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                            <li>
                                <h5>Akash Sahu</h5>
                                <address>
                                    <p>B-11</p>
                                    <p>Gali no.8 Tulsi nagar Shastri nagar</p>
                                    <p>JAIPUR, RAJASTHAN 302016</p>
                                    <p>India</p>
                                    <p>Phone number: 9828490319</p>
                                </address>
                                <div className="edit-delete-button-section">
                                    <a href="javascript:;">Edit</a>
                                    <a href="javascript:;">Delete</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <RightSection/>                    
            </>
        )
    }
}

export default Address;
