import React from 'react';
// import logo from './logo.svg';

// import { render } from "react-dom";

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./components/pages/About";
import Search from "./components/pages/Search";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/quiz" component={Quiz} />
        <Route exact path="/search" component={Search} />
      </div>
    </Router>
  )
}

export default App;

