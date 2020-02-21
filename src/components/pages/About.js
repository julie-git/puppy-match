import React from "react";
// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/About.css";
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect
// import {bounde} from 'react-animations';




function About() {
  return (
   
    <div className="header">
     
     <div className="intro" >
     <Zoom>{/*Using Zoom Effect*/}
        <h1>Pup Match</h1>
      
        <h2>Dog Breed Matchmaker</h2>
      
      
      <Link to="/quiz"><button type="button" className="button hvr-grow">  <i className="fas fa-paw"></i> Take the Quiz! </button></Link>  
      </Zoom>
      </div>
      
     
     </div>
   );
}

export default About;
