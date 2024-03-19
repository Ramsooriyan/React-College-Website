import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/video.mp4';

const VideoPlayer = ({player, setPlayer}) => {

  const playerstate = useRef(null);

  const closePlayer = (e) => {
    if(e.target === playerstate.current){
      setPlayer(false);
    }
  }

  return (
    <section className={`videoPlayer ${player?'':'hide'}`} ref={playerstate} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </section>
  )
}

export default VideoPlayer