import React, { Component } from "react";
import API from "../../utils/API";
import Quiz from "../pages/Quiz"
import SearchResults from "../SearchResults";

// import Quiz from "./Quiz";

class Search extends Component {
  state = {
    search: "",
    breeds: "",
    results: [],
    error: "",
    profile: "Shih Tzu"
  };

 

//  breedpick = Quiz.getDogsOfBreed();

   breedprofile(){
     let breed = localStorage.getItem("breed");
      let profile="";
    switch (breed) {
      case "shihtzu":
        profile= "Shih Tzu"
       
        break;
      case "labrador":
        profile = "Labrador";
        
        break;
      case "chihuahua":
        profile = "Chihuaha";
      
        break;
      case "beagle":
        profile = "Beagle";
       
        break;
      default:
        profile= "Shih Tzu";

    }

   
    return profile;
   }

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    console.log("*****Search component mount***")
    // const breed = this.props.match.params.handle
    // console.log(this.state.breed);
    // console.log(this.breedpick);
    // let thisbreedpick="shitzu";
    // API.getDogsOfBreed(this.state.search)
    //   .then(res => this.setState({ results: res.data.message }))
    //   .catch(err => console.log(err));
      // console.log(this.state.search);
     let setbreed = localStorage.getItem("breed");
       console.log(setbreed)
      // this.state.setState({search : setbreed})

      // API.getDogsOfBreed(this.state.search)
      API.getDogsOfBreed(setbreed)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
        console.log(this.state.results);
        this.setState({ results: this.state.results.slice(1,2),error:"" });
        
        
      })
      .catch(err => this.setState({ error: err.message }));
  
  }

  // handleInputChange = event => {
  //   this.setState({ search: event.target.value });
  // };

 
  render() {
    return (
      <div>
        {/* <Container style={{ minHeight: "80%" }}> */}
          <h1 className="text-center">{this.state.profile}</h1>
          
          
         
          <SearchResults results={this.state.results} />
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;
