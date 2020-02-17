import React, { Component,Redirect } from "react";
import { Link } from "react-router-dom";
import M from 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';
import Search from "../pages/Search"
import { useHistory } from 'react-router-dom';

// import { makeStyles } from '@material-ui/core/styles';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// // import FormControl from '@material-ui/core/FormControl';
// import { FormControl } from '@material-ui/core';
// import { withStyles } from "@material-ui/core/styles"
// import FormLabel from '@material-ui/core/FormLabel';


class Quiz extends Component {
  // breed = [];

  state = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: '',
    breed: '',
    redirectToNewPage: true
  }


  handleFormSubmit = event => {
    event.preventDefault();

    console.log("clicked submit handler");
    
    // this.setState({
    //   [this.state.breed] : this.calculateBreed()
    // })
    // this.state.setState.breed.setState(this.calculateBreed);
    let setBreed = this.calculateBreed();
    console.log("===retrurn from calcodgbreed")
    //  console.log(this.state.breed);
    //  localStorage.setItem("breed", this.state.breed);
    console.log(setBreed);
     localStorage.setItem("breed", setBreed);
    //   this.setState({redirectToNewPage : true});
    //  console.log("*****redirect***")

    // let path = `search`;
    //  let history = useHistory();
    //  history.push(path);


    // console.log(this.state.redirectToNewPage);
    // if (this.state.redirectToNewPage) {
    //   return (
    //   <Redirect to="/search"/>
    //   )
    // }
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
        //  this.state.breed.setState("shitzu");
        break;
      case "l":
        pickBreed = "labrador";
        // this.state.breed.setState("labrador");
        break;
      case "c":
        pickBreed = "chihuahua";
        // this.state.breed.setState("yorkie");
        break;
      case "b":
        pickBreed = "beagle";
        //     this.state.breed.setState("bordercollie");
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
            
        <Row>
        <h1 className="materialize-red 2">Take the Pup Match Quiz</h1>
        </Row>

        <form onSubmit={this.handleFormSubmit}>
        {/* <FormControl component="fieldset" className={classes.formControl}> */}
          <label>
            What is your ideal Pup Size?
         </label>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q1" value="c" />
              xtra small - I like to carry my pup in my purse or backpack
          </label>
          </div>
          {/* </FormControl> */}

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
              <input onChange={this.handleInputChange} type="radio" name="q2" value="c" />
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
              Vintage champagne with aged cheese plate
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
              <input onChange={this.handleInputChange} type="radio" name="q4" value="c" />
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

          <button className="btn btn-default" type="submit" onClick="handleFormSubmit()">Submit</button>
          {/* <Link to="/search"><button type="submit"onClick="handleFormSubmit()" >Submit</button></Link>   */}
          {/* <Link to="/search" className="btn btn-primary" type="submit">Submit</Link> */}
          {/* <Link  to={{pathname: "/Search", data: "shihtzu" }} ></Link> */}
        </form>
        {/* <Link  to={{pathname: "/Search", data: "shihtzu" }} ></Link> */}

      </div>
      
    );
  }


}

export default Quiz;
