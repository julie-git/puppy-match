import React, { Component } from "react";
import API from "../../utils/API";
import Quiz from "../pages/Quiz"

// import Quiz from "./Quiz";

class Search extends Component {
  state = {
    search: "",
    breed: "shitzu",
    results: [],
    error: ""
  };

//  breedpick = Quiz.getDogsOfBreed();

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log("*****Search component mount***")
    // const breed = this.props.match.params.handle
    // console.log(this.state.breed);
    // console.log(this.breedpick);
    let thisbreedpick="shitzu";
    API.getDogsOfBreed(thisbreedpick)

      .then(res => this.setState({ breed: res.data.message }))
      .catch(err => console.log(err));
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.getDogsOfBreed(this.state.search)
  //     .then(res => {
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       this.setState({ results: res.data.message, error: "" });
  //     })
  //     .catch(err => this.setState({ error: err.message }));
  // };
  render() {
    return (
      <div>
        {/* <Container style={{ minHeight: "80%" }}> */}
          <h1 className="text-center">Your Pup Match!</h1>
          
          
         
          {/* <SearchResults results={this.state.results} /> */}
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;
