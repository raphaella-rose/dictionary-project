import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {

  return (<div className="Meaning body">
    <h3 className="heading">{props.meaning.partOfSpeech}</h3>
    {props.meaning.definitions.map(function(definition, index) {
    if (definition.example) {return (
    <div key={index}>
    <span>
      <span className="definition">
      <strong>Definition: </strong>
    {definition.definition}
    </span>
    <br />
    <div className="example">
       <strong>Example: </strong>
       <em>{definition.example}</em>
       </div>     
       <Synonyms synonyms={definition.synonyms}/>
    </span>
    </div>
    );
    } else { 
      return (
  <div key={index}>
    <span>
      <span className="definition">
      <strong>Definition: </strong>
    {definition.definition}
    </span>
    <br />
       <Synonyms synonyms={definition.synonyms}/>
    </span>
    </div>
      )}
    })}
  </div>);

}
