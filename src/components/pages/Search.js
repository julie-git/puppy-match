import React, { Component } from "react";
import API from "../../utils/API";
import Quiz from "../pages/Quiz"
import SearchResults from "../SearchResults";
import "../../styles/Search.css"
import Grid from '@material-ui/core/Grid';

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

  
  breedprofile() {
    let breed = localStorage.getItem("breed");
    let profile = "";
    let description = "";
    let breedname = "";
    // console.log("****breedprofile***");
    // console.log(breed);


    switch (breed) {
      case "shihtzu":
        profile = "Prince/Princess";
        breedname = "Shih Tzu"
        description = "Shih Tzu's love luxury and lounging around with only the finest of everything.  They are high maintenance and need daily grooming and daily brushing of their soft luxurious hair and monthly professional grooming appointments. Shih Tzu will be your loyal companion.  As a small dog bred to spend most of their day inside royal palaces, they make a great pet if you live in an apartment or lack a big backyard.";
        break;
      case "labrador":
        profile = "Goofy Jock"
        breedname = "Labrador";
        description = "lab description";
        break;
      case "chihuahua":
        profile = "Sassy Socialite";
        breedname = "Chihuaha";
        description = "Chihuahuas possess loyalty, charm, and big-dog attitude. Even tiny dogs require training, and without it this clever scamp will rule your household like a little Napoleon. Compact and confident, Chihuahuas are ideal city pets.";
        break;
      case "beagle":
        profile = "Playful LoveBug";
        breedname = "Beagle";
        description = " Beagles are loving and lovable, happy, and companionable—all qualities that make them excellent family dogs. No wonder that for years the Beagle has been the most popular hound dog among American pet owners. These are curious, clever, and energetic hounds who require plenty of playtime.";
        break;
      default:
        profile = "Prince/Princess";
        breedname = "Shih Tzu"
        description = "Shih Tzu's love luxury and lounging around with only the finest of everything.  They are high maintenance and need daily grooming and daily brushing of their soft luxurious hair and monthly professional grooming appointments. Shih Tzu will be your loyal companion.  As a small dog bred to spend most of their day inside royal palaces, they make a great pet if you live in an apartment or lack a big backyard.";

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
      <div className="container">
       
      
        <div className="search-wrapper">
        <h1 className="text-center">{this.state.breedname}</h1>
        <Grid container justify="center">
        <p>{this.state.description}</p>



        <SearchResults results={this.state.results} />

      </Grid>
       </div>
      </div>

    );
  }
}

export default Search;
