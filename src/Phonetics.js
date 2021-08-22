import React from "react";
import ReactAudioPlayer from 'react-audio-player';

export default function Phonetics(props) {
  console.log(props.phonetics)
  return (
  <div className="Phonetics">
    <span>
       <ReactAudioPlayer
        src={props.phonetics.audio}
        controls
        className="player"
      />
    </span>
    <span>
    {props.phonetics.text}
    </span>
  </div>
    )
}