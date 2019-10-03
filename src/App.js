import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from './components/index';
import Jokes from './components/jokes';
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
              <Link to="/Index" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/Jokes" className="nav-link">Random joke</Link>
            </li>
            <li className="nav-item">
              <Link to="/multipleJokes" className="nav-link">More jokes</Link>
            </li>

          </ul>
</div>
</nav>
          <Route path="/Index" component={Index} />
          <Route path="/Jokes" component={Jokes} />
          <Route path="/multipleJokes" component={MultipleJokes} />

          <footer className="footer mt-auto py-3">
            test
          </footer>
        </div>

      </Router>
  );
}
}

export default App;
