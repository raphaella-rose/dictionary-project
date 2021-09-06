import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {

  return (<div className="Meaning body">
    <h3 className="heading">{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map((definition, index) => {
   return (
    <div key={index}>
    <span>
      <span className="definition mt-2">
      <strong>Definition: </strong>
    {definition.definition}
    </span>
    <br />
      <Example example={definition.example} />
       <Synonyms synonyms={definition.synonyms} />
    </span>
    </div>
    );
    
    })}
  </div>);

}
