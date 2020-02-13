import React from 'react';
// import logo from './logo.svg';

// import { render } from "react-dom";

// get our fontawesome imports
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
// import Search from "./components/pages/Search";
import Quiz from "./components/pages/Quiz";

function App() {
  return (
    <Router>
      <div>
        {/* <NavTabs /> */}
        <Route exact path="/" component={About} />
         <Route exact path="/about" component={About} />}
        <Route exact path="/quiz" component={Quiz} />
      </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
      
//       <div backgroundImage="https://i.imgur.com/qkdpN.jpg">
//         <h1>Pup Match</h1>
//         <h2>Dog Breed Matchmaker</h2>
//       </div>
      
    
        

       
//         <div>
//     <FontAwesomeIcon icon={faHome} />
//   </div>
//       </header>
//        </div>
//   );
// }

// export default App;
