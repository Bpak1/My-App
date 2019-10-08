import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from './components/aboutme';
import Jokes from './components/jokes';
import SiteFooter from './components/footer';
import MultipleJokes from './components/multipleJokes';

class App extends Component {

  render(){
    return (
      <Router>
        <div>
<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className=" sticky-top py-1">

        <ul className="navbar-nav  bg-dark">
            <li className="nav-item ">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Jokes" className="nav-link">Random joke</Link>
            </li>
            <li className="nav-item">
              <Link to="/Index" className="nav-link">About me</Link>
            </li>

          </ul>
</div>
</nav>
  <div className="mb-5">
          <Route exact path="/Index" component={AboutMe} />
          <Route exact path="/Jokes" component={Jokes} />
          <Route exact path="/" component={MultipleJokes} />
</div>
          <SiteFooter  />
        </div>

      </Router>
  );
}
}

export default App;
