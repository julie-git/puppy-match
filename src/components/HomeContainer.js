import React, { Component } from "react";
import QuizContainer from "./QuizContainer";
// import EmployeeCard from "./EmployeeCard";
import API from "../utils/API";
import "../styles/Home.css";


class HomeContainer extends Component {


    // When this component mounts, search the Giphy API for pictures of kittens
    // onsafe_componentWillMount()
    handleClick() {
        
      }

    render() {

         return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Pup Match</h2>
                    </div>

                </div>
                <div>
               {/* <button onClick={this.handleClick}>click me</button>     */}
               
            </div>
            </div>

        )
    }
}

    export default HomeContainer;