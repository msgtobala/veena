import React, { Component } from "react";
import { connect } from "react-redux";

import "../../scss/style.css";
import "../../scss/normalize.css";
import "../../scss/main.css";
import "../../scss/custome_audio_video_player.css";
import "../../scss/jplayer.blue.monday.min.css";
import "../../assets/js/main.js";
import InfiniteCarousel from "react-leaf-carousel";
import Header from "../../component/Header";
import LeftSection from "../../component/LeftSection";
import RightSection from "../../component/RightSection";
import { NotificationContainer } from "react-notifications";
import {
  MiddleSection,
  HeadingSection,
  ProductSection,
  PlayListHeader,
  FavSongs,
  FavSong,
  SongCard
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Song_image from "../../assets/img/songs.png";

class DetailsPage extends Component {
  componentDidMount() {}

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
                <a href="/">Playlist</a>
              </li>
            </ul>
          </HeadingSection>
          <ProductSection>
            <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
              <PlayListHeader>
                <h2>Playlist</h2>
                <button>
                  <FontAwesomeIcon icon={faList} />
                  &nbsp; Create PlayList
                </button>
              </PlayListHeader>
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                </InfiniteCarousel>
              </div>
            </div>
            <h2>Playlist</h2>
            <FavSongs>
              <FavSong>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
              </FavSong>
              <FavSong>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
              </FavSong>
              <FavSong>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
              </FavSong>
              <FavSong>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
              </FavSong>
              <FavSong>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
                <SongCard>
                  <span>01</span>
                  <img src={Song_image} alt="ablum_image" />
                  <div>
                    <p>Kuve Par Aokli-Vol. 1</p>
                    <span>Bob Dylan</span>
                  </div>
                  <FontAwesomeIcon icon={faEllipsisV} />
                </SongCard>
              </FavSong>
            </FavSongs>
            <div className="homepage-albums-silder" style={{ marginTop: "3%" }}>
              <PlayListHeader>
                <h2>Favorite Albums</h2>
              </PlayListHeader>
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
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                      className="album-slider-item"
                    >
                      <img
                        src={require("../../assets/img/slider/1.jpg")}
                        alt="slider_image"
                      />
                      <h6>Pallo Latke</h6>
                      <p>Kawar Jeet Singh</p>
                    </div>
                  </div>
                </InfiniteCarousel>
              </div>
            </div>
          </ProductSection>
        </MiddleSection>
        <RightSection />
      </>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsPage);
