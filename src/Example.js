import React from "react";
import "./Example.css";

export default function Example(props) {
   if (props.example&& props.example.length > 0) { 
  return  ( <div className="Example">
       <strong>Example: </strong>
       <em>{props.example}</em>
       </div>     )
} else {
  return null;
}}