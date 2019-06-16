import styled from "styled-components";
import { SongCard } from "../pages/Playlist/styles";
import { PlayListHeader } from "../pages/Playlist/styles";

export const VideoDetails = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ecf0f1;
  & > div:first-child {
    flex: 10;
  }
`;

export const VideoControls = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  div:last-child img {
    width: 6px;
  }
`;

export const Holder = styled.div`
  position: relative;
  cursor: pointer;
`;

export const RightAside = styled.div`
  margin-top: 30px;
  height: 100%;
  border-bottom: 3px solid #bdc3c7;
  h5 {
    margin: 0;
  }
`;

export const PlayLists = styled.div`
  display: block;
  height: 65%;
  overflow: scroll;
  border-bottom: 6px solid #bdc3c7;
`;

export const PlayList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 40px 30px 12px 40px;
  cursor: pointer;
  span {
    font-size: 18px;
  }
  img {
    width: 22px;
  }
  :hover {
    span {
      color: #ea0a8c;
    }
  }
`;

export const AudioSection = styled.div`
  height: 35%;
`;

export const SongCards = styled(SongCard)`
  justify-content: space-between;
  padding: 32px;
  p {
    margin-bottom: 0;
  }
`;

export const PlayListHead = styled(PlayListHeader)`
  justify-content: center;
  button {
    outline: none;
  }
`;