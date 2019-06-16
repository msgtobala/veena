import styled from "styled-components";

export const MiddleSection = styled.div`
  width: 60vw;
  background-color: #f2f2f2;
  height: 100vh;
  padding: 0 20px;
  padding-top: 100px;
  margin: auto;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const HeadingSection = styled.div`
  border-bottom: 1px solid rgba(65, 65, 65, 0.2);
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  ul {
    padding: 0px;
    margin: 0px;

    li {
      list-style-type: none;
      display: inline-block;
      font-size: 16px;
      margin-bottom: 10px;
      margin-right: 35px;
      font-weight: 500;
      position: relative;
      color: #414141;

      :last-child::before {
        content: "";
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        left: -20px;
        background-color: #414141 !important;
        width: 6px;
        height: 6px;
        border-radius: 50%;
      }

      a {
        text-decoration: none;
        color: inherit;
        display: block;
      }
    }

    li.active {
      color: #a3a6a8;
    }
  }
`;

export const ProductSection = styled.div`
  h2 {
    font-size: 24px;
    margin: 20px 0px 10px 0px;
  }
`;

export const PlayListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button {
    background: #2c3e50;
    color: white;
    padding: 10px 25px;
    border: none;
    border-radius: 25px;
    margin-right: 14px;
    font-weight: bold;
    :hover {
      background: white;
      color: #2c3e50;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export const FavSongs = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.3);
    background-color: transparent;
  }
  ::-webkit-scrollbar {
    height: 4px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ea0a8c;
  }
`;

export const SongCard = styled.div`
  display: flex;
  align-items: center;
`;

export const FavSong = styled.div`
  width: 500px;
  display: inline-block;
  margin-bottom: 12px;
  margin-right: 12px;
  > ${SongCard} {
    background: white;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 18px;
    margin-bottom: 12px;
    > img {
      margin: 0 24px;
    }
    > div {
      flex: 1;
      p {
        margin-bottom: 7px;
        font-weight: bold;
        color: #2c3e50;
      }
      span {
        color: #bdc3c7;
      }
    }
  }
`;
