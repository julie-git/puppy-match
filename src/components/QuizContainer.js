import React, { Component } from "react";
import HomeContainer from "./HomeContainer";


class QuizContainer extends Component {

    submitClick() {
        alert("Great Shot!");
      }

    render() {

        return (
           <div className="container">
               <div className="row">
                   <div className="col-md-12">
                       <h2>Quiz</h2>
                   </div>
                
               </div>
           
            <div>
               <button onClick={this.submitClick}>Submit</button>    
            </div>
            </div>
       )
   }
}






export default HomeContainer;