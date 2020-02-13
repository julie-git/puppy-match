import React from "react";


// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


function About() {
  return (
   
    <div>
      {/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Pup Match</h1>
        <h2>Dog Breed Matchmaker</h2>
      </Hero>
      <Container >
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Take the quiz and find your best breed for your lifestyle.
            </p>
           
          </Col>
        </Row> */}
        <div >
        <h1>Pup Match</h1>
        <h2>Dog Breed Matchmaker</h2>
      </div>
      
     
      <Link to="/quiz">
     <button type="button"> Take the Quiz!</button>
      </Link>  

      
        
               
         <div>
   <FontAwesomeIcon icon={faHome} />
   </div> 
     
     </div>
   );
}

export default About;
