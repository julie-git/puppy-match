import React from "react";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/About.css";
// import {bounde} from 'react-animations';




function About() {
  return (
   
    <div className="header">
     
     <div className="intro" >
       
        <h1>Pup Match</h1>
      
        <h2>Dog Breed Matchmaker</h2>
      
      
      <Link to="/quiz"><button type="button" className="button hvr-grow">  <i class="fas fa-paw"></i> Take the Quiz! </button></Link>  
      </div>
      
     
     </div>
   );
}

export default About;
