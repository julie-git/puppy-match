import React from "react";
import "./style.css";
// import Search from "../../components/pages/Search"

function SearchResults(props) {

     return (
      
      // <ul className="list-group search-results">
        <ul className="results-box">
        {props.results.map(result => (
          <li key={result} className="list-group-item">
            <img alt="Dog" src={result} className="dog-image" />
           </li>
        ))}
      </ul>
    );
  }

export default SearchResults;
