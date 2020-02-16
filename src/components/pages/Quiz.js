import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';


class Quiz extends Component {
  // breed = [];

  state = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    breed: ''
  }


  handleFormSubmit = event => {
    event.preventDefault();

    console.log("clicked submit handler");
    //add quiz logic 
    console.log(this.state.q1);
    console.log(this.state.q2);
    console.log(this.state.q3);
    console.log(this.state.q4);
    console.log(this.state.q5);

    // this.handleInputChange([this.breed] , "s");
    // this.state.breed.setState(this.calculateBreed());
    this.setState({
      breed: this.calculateBreed()
    })
    // this.state.setState.breed.setState(this.calculateBreed);
    console.log(this.state.breed);
    // <Link
    //       to={{
    //         pathname: "/Search",
    //          data: "shihtzu"
    //       }}
    //     ></Link>

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
        pickBreed = "shitzu";
        //  this.state.breed.setState("shitzu");
        break;
      case "l":
        pickBreed = "labrador";
        // this.state.breed.setState("labrador");
        break;
      case "y":
        pickBreed = "yorkie";
        // this.state.breed.setState("yorkie");
        break;
      case "b":
        pickBreed = "bordercollie";
        //     this.state.breed.setState("bordercollie");
        break;
      default:
        pickBreed = "shihtzu";

    }

    // this.state.breed.setState(pickBreed);
    // console.log(this.state.breed);

    return pickBreed;
    // return this.state.breed;

  }


  render() {
    return (
      <div>
        <h1>Take the Pup Match Quiz</h1>


        <form onSubmit={this.handleFormSubmit}>

          <label>
            What is your ideal Pup Size?
         </label>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q1" value="y" />
              xtra small - I like to carry my pup in my purse or backpack
          </label>
          </div>

          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q1" value="s" />
              small - I want to be able to carry my pup around and snuggle up
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q1" value="b" />
              medium - I want my pup to be active, but not too small
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q1" value="l" />
              large - I want more to love with a big bundle of joy
          </label>
          </div>
          {/* question 2 */}
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
              A 5-mile run, and out to dinner
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q2" value="y" />
              Getting together with friends
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q2" value="b" />
              A game of pickup basketball, beers with the guys
          </label>
          </div>
          {/* Question 3 */}
          <label>
            3. My Favorite Foods are ?
         </label>
          <div className="radio">

            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="y" />
              Vintage champagne with aged cheese plate
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="b" />
              Fast Food Big Mac Meal Deal
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="s" />
              Rich chocolate cake with a glass of milk
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="l" />
              Pepperonini Pizza and beer
          </label>
          </div>

          <label>
            4. How often do I clean my Home?
         </label>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q4" value="y" />
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
              <input onChange={this.handleInputChange} type="radio" name="q4" value="s" />
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
              <input onChange={this.handleInputChange} type="radio" name="q5" value="y" />
              Secret Life Of Pets
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q5" value="s" />
              Benji
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q5" value="b" />
              Bolt
          </label>
          </div>

          <button className="btn btn-default" type="submit" onClick="handleFormSubmit()">Submit</button>

        </form>
        {/* <Link
          to={{
            pathname: "/Search",
             data: "shihtzu"
          }}
        ></Link> */}

      </div>
    );
  }


}

export default Quiz;
