import React, { Component } from "react";
import M from 'materialize-css';
import { Button, Card, Row, Col } from 'react-materialize';

class Quiz extends Component {
  state = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: ''
    }

    
    handleFormSubmit = event => {
      event.preventDefault();
      let breed = "shihtzu"
      console.log("clicked submit handler");
      //add quiz logic 
      console.log(this.state.q1);
      console.log(this.state.q2);
      console.log(this.state.q3);
      console.log(this.state.q4);
      console.log(this.state.q5);
  
      return breed;
  
    }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }


  render() {
    return (
      <div>
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
              Nachos and Cheese and a Margarita
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
          4. How often do I Clean my Home?
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
              Nachos and Cheese and a Margarita
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="s" />
              Rich Chocolate cake with a glass of milk
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="l" />
              Pepperonini Pizza and beer
          </label>
          </div>

          <label>
          4. How often do I Clean my Home?
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
              Nachos and Cheese and a Margarita
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="s" />
              Rich Chocolate cake with a glass of milk
          </label>
          </div>
          <div className="radio">
            <label>
              <input onChange={this.handleInputChange} type="radio" name="q3" value="l" />
              Pepperonini Pizza and beer
          </label>
          </div>
          
          
          
          
          
          {/* <button className="btn btn-default" type="submit">Save</button> */}
          <button className="btn btn-default" type="submit"onClick="handleFormSubmit()">Submit</button>

        </form>

      </div>
    );
  }

  
}

export default Quiz;
