import React from "react";
import ReactAudioPlayer from 'react-audio-player';
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
  <div className="Phonetics">
    <div className="phoneticWritten">
    {props.phonetics.text}
    </div>
    <div className="phoneticAudio">
       <ReactAudioPlayer
        src={props.phonetics.audio}
        controls
        className="player"
      />
    </div>
    
  </div>
    )
}