import React, { Component } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import "../../styles/Quiz.css"
import Search from "../pages/Search"
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



class Quiz extends Component {

  state = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    breed: '',
    redirectToNewPage: false
  }



  handleFormSubmit = event => {
    event.preventDefault();

    let setBreed = this.calculateBreed();
    console.log("===retrurn from calcodgbreed")
    //  console.log(this.state.breed);
    //  localStorage.setItem("breed", this.state.breed);
    console.log(setBreed);
    localStorage.setItem("breed", setBreed);
    this.setState({ redirectToNewPage: true });

  }


  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  calculateBreed() {
    console.log("***Calculate breed");
    let pickBreed = "";
    const answers = Object.values(this.state);
    console.log(answers);

    //calculate which breed was selected the most from quiz
    let mf = 1;
    let m = 0;
    let item;
    for (let i = 0; i < answers.length; i++) {
      for (let j = i; j < answers.length; j++) {
        if (answers[i] === answers[j])
          m++;
        if (mf < m) {
          mf = m;
          item = answers[i];
          console.log(item);
        }
      }
      m = 0;
    }

    console.log(item + " ( " + mf + " times ) ");

    //figure out breedname
    switch (item) {
      case "s":
        pickBreed = "shihtzu";

        break;
      case "l":
        pickBreed = "labrador";

        break;
      case "c":
        pickBreed = "chihuahua";

        break;
      case "b":
        pickBreed = "beagle";

        break;
      default:
        pickBreed = "shihtzu";

    }

    // this.state.breed.setState(pickBreed);
    console.log(pickBreed);

    return pickBreed;


  }


  render() {
    return (

      <div className="container">
        {this.state.redirectToNewPage && <Redirect to="/search" />}
        <h1 className="h1over">Pup Match Quiz</h1>
        <Grid container justify="center">
          

          <form onSubmit={this.handleFormSubmit}>

            <label>
              1. What is your ideal Pup Size?
         </label>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q1" value="c" />
                Xtra Small - I like to carry my pup in my purse or backpack
          </label>
            </div>


            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q1" value="s" />
                Small - I want to be able to carry my pup around and snuggle up
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q1" value="b" />
                Medium - I want my pup to be active, but not too small
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q1" value="l" />
                Large - I want a big bundle of joy, more to love
          </label>
            </div>

            <label>
              2.  It's Friday Night, What's the Plan?
         </label>
            <div className="radio">

              <label>
                <input onChange={this.handleInputChange} type="radio" name="q2" value="s" />
                A tall glass of wine, a good read, and snuggles with my pup
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q2" value="l" />
                A 5-mile run, and out to dinner with friends
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q2" value="c" />
                A short walk and Happy Hour with your pals
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q2" value="b" />
                A game of pickup basketball, beers with the guys
          </label>
            </div>

            <label>
              3. My Favorite Foods are ?
         </label>
            <div className="radio">

              <label>
                <input onChange={this.handleInputChange} type="radio" name="q3" value="c" />
                Street tacos and a margarita
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q3" value="b" />
                Big Mac Meal Deal
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q3" value="s" />
                Vintage champagne with an aged cheese plate
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q3" value="l" />
                Pepperoni Pizza and beer
          </label>
            </div>

            <label>
              4. How often do I clean my Home?
         </label>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q4" value="s" />
                Everyday I tidy up
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q4" value="b" />
                Monthly I speed clean
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q4" value="c" />
                Weekly I do a once over
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q4" value="l" />
                Clean? I hire a cleaning lady
          </label>
            </div>

            <label>
              5. My favorite movie with dogs is..
         </label>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q5" value="l" />
                Marley and Me
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q5" value="c" />
                Beverley Hills Chihuahua
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q5" value="s" />
                Secret Life of Pets
          </label>
            </div>
            <div className="radio">
              <label>
                <input onChange={this.handleInputChange} type="radio" name="q5" value="b" />
                Shiloh
          </label>
            </div>

            <button className="btn btn-default" type="submit" >Submit</button>

          </form>

         
        </Grid>

      </div>

    );
  }


}

export default Quiz;
