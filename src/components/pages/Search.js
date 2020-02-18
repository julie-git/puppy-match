import React, { Component } from "react";
import API from "../../utils/API";
import Quiz from "../pages/Quiz"
import SearchResults from "../SearchResults";

// import Quiz from "./Quiz";

class Search extends Component {
  state = {
    search: "",
    breed: "",
    results: [],
    error: "",
    breedname: "",
    profile: "",
    description: ""
  };

  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     search: "",
  //   breed: "",
  //   results: [],
  //   error: "",
  //   profile: "",
  //   description:""

  //     }
  // }




  breedprofile() {
    let breed = localStorage.getItem("breed");
    let profile = "";
    let description = "";
    let breedname = "";
    console.log("****breedprofile***");
    console.log(breed);


    switch (breed) {
      case "shihtzu":
        profile = "Your a Playful Cuddle Bug";
        breedname = "Shih Tzu"
        description = "You love luxury and lounging around ";
        break;
      case "labrador":
        profile = "Your a Jock"
        breedname = "Labrador";
        description = "lab description";
        break;
      case "chihuahua":
        profile = "Your a Princess/Prince";
        breedname = "Chihuaha";
        description = "Chi description";
        break;
      case "beagle":
        profile = "Beagle";
        breedname = "Labrador";
        description = "lab description";
        break;
      default:
        profile = "Your a Playful Cuddle Bug";
        breedname = "Shih Tzu"
        description = "You love luxury and lounging around ";

    }
    console.log(profile);
    console.log(breedname);

    this.setState({ profile: profile });
    this.setState({ breedname: breedname });
    this.setState({ description: description });

    console.log(this.state.profile);
    console.log(this.state.breedname);
    console.log(this.state.description);
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
        this.setState({ results: this.state.results.slice(1, 2), error: "" });
        this.breedprofile();

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
        <h1 className="text-center">{this.state.breedname}</h1>
        <p>{this.state.description}</p>



        <SearchResults results={this.state.results} />
        {/* </Container> */}
      </div>
    );
  }
}

export default Search;
