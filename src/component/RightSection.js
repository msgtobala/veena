import React, { Component } from "react";
import "../scss/style.css";
import "../scss/normalize.css";
import "../scss/main.css";
import "../scss/custome_audio_video_player.css";
import "../scss/jplayer.blue.monday.min.css";
import ReactAudioPlayer from "react-audio-player";
import { RightAside, PlayLists, PlayList, AudioSection } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faList } from "@fortawesome/free-solid-svg-icons";
import Song_Image from "../assets/img/svg_image/play.svg";
import { SongCards, PlayListHead } from "./styles";
import Song_image from "../assets/img/songs.png";
import { withRouter } from "react-router-dom";

class RightSection extends Component {
  redirectToPlaylist = () => {
    this.props.history.push("/playlist");
  };

  render() {
    return (
      <div className="right-section">
        <RightAside>
          <PlayListHead>
            <h5>My Playlist</h5>
            <button onClick={this.redirectToPlaylist}>
              <FontAwesomeIcon icon={faList} />
              &nbsp; Show PlayList
            </button>
          </PlayListHead>
          <PlayLists>
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>{" "}
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>
            <PlayList>
              <img src={Song_Image} alt="player_image" />
              <span>Rajasthani Song Songs</span>
              <FontAwesomeIcon icon={faEllipsisV} />
            </PlayList>
          </PlayLists>
          <AudioSection>
            <SongCards>
              <span>01</span>
              <img src={Song_image} alt="ablum_image" />
              <div>
                <p>Kuve Par Aokli-Vol. 1</p>
                <span>Bob Dylan</span>
              </div>
              <FontAwesomeIcon icon={faEllipsisV} />
            </SongCards>
            <ReactAudioPlayer
              src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
              autoPlay={false}
              controls
              style={{
                margin: "auto",
                textAlign: "center",
                display: "flex",
                outline: "none"
              }}
            />
          </AudioSection>
        </RightAside>
      </div>
    );
  }
}

export default withRouter(RightSection);
