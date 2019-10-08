import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class SiteFooter extends Component {
  render(){
    return(


      <nav className="navbar navbar-expand-md navbar-dark bg-dark mt-5  fixed-bottom">
              <div className=" sticky-bottom py-1">

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
    )
  }
}

export default SiteFooter;
