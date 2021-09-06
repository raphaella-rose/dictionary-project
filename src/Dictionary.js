import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props) {
const [keyword, setKeyword] = useState(props.defaultWord);
const [ready, setReady] = useState(false);
const [results, setResults] = useState(null);
const [photos, setPhotos] = useState(null);

function handleDictionaryResponse(response) {
setResults(response.data[0]);
setReady(true);
}
function handlePexelsResponse(response) {
  setPhotos(response.data.photos);
}
function search() {
// documentation: https://dictionaryapi.dev/
let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
axios.get(apiUrl).then(handleDictionaryResponse);
// documentation: https://www.pexels.com/api/
let pexelsApiKey = "563492ad6f91700001000001712f67c6339d4b98ad7d624c90624fea"
let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
let headers = { Authorization: `Bearer ${pexelsApiKey}` };
axios.get(pexelsApiUrl, { headers: headers, }).then(handlePexelsResponse);
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
    <input className="searchBar" type="search" placeholder="Sunset..." onChange={handleKeywordChange} />
    </form>
    <Results results={results} />
    <Photos photos={photos} />
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