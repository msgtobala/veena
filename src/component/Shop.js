import React, { Component } from 'react';
import '../scss/style.css';
import '../scss/normalize.css';
import '../scss/main.css';
import '../scss/custome_audio_video_player.css';
import '../scss/jplayer.blue.monday.min.css';
import '../assets/js/main.js';
import '../assets/js/plugins.js';
import Header from './Header';
import LeftSection from './LeftSection';
import RightSection from './RightSection';

class Shop extends Component {
    render() {
        return (
            <>
                
                <Header/>
               <LeftSection/>
                <div class="middle-section">
                    <div class="product-section">
                        <div class="heading-section">
                            <ul>
                                <li><a href="javascript:;">Veena</a></li>
                                <li class="active"><a href="javascript:;"> Shop</a></li>
                            </ul>
                        </div>
                        <div class="product-details">
                            <ul>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>
                                <li>
                                    <a href="product_details.php">
                                        <img src={require("../assets/img/product-image.png")} />
                                        <p class="song-name">Colorful Rajasthani Songs</p>
                                        <p class="price">$768.00/-<del class="max-price">900.00/-</del></p>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <RightSection/> 
            </>
        )
    }
}
export default Shop