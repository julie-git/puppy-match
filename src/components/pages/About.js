import React from "react";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../../styles/About.css";




function About() {
  return (
   
    <div className="header">
           <div >
        <h1>Pup Match</h1>
        <h2>Dog Breed Matchmaker</h2>
      </div>
   
      <Link to="/quiz"><button type="button">  <i class="fas fa-paw"></i> Take the Quiz!</button></Link>  

      
     
     </div>
   );
}

export default About;
