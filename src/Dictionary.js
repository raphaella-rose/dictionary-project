import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary(props) {
const [keyword, setKeyword] = useState(props.defaultWord);
const [ready, setReady] = useState(false);
const [results, setResults] = useState(null);

function handleResponse(response) {
setResults(response.data[0]);
setReady(true);
}

function search() {
// documentation: https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search(keyword);
}
function handleKeywordChange(event) {
setKeyword(event.target.value);
}

if (ready) { return (
  <div className="dictionary-container">
    <div className="Dictionary">
    <form  onSubmit={handleSubmit}>
    <input className="searchBar" type="search" placeholder="Dachshund..." onChange={handleKeywordChange} />
    </form>
    <Results results={results}/>
    </div>
    </div>
  )} else {
    search();
    return(
    <p>
      Loading...
    </p>
    )
  }
}