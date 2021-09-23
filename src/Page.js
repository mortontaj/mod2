import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Api1 from "./Api1";
import HomePage from "./homePage";
import Api2 from "./Api2";
import About from "./About";
import Contact from "./Contact";
import Signature from "./Signature";

export default class Page extends Component {
  render() {
    return (
      <Router>
        <ul className="bar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Equity">Equity</Link>
          </li>
          <li>
            <Link to="/Exchange">Exchange</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/equity" component={Api1} />
          <Route path="/exchange" component={Api2} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          {/* <Route path='/#' component={About}/> */}
        </Switch>
        <Signature />
        <ul className="bar">
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>
          <li>
            <Link to="/#">Copyright</Link>
          </li>
        </ul>
      </Router>
    );
  }
}

// -------------------------

/*
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from '../Home'
  import About from '../About'
  import Profile from '../Profile'
  import Other from '../Other'
const Nav = () => {
    return (

        <Router>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li> 
                <li><Link to='/other'>Other</Link></li>
            </ul>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/profile' component={Profile} />
                <Route path='/contact' component={Contact} /> 
                <Route path='/other' component={Other} />
            </Switch>

        </Router>

    )
}

export default Nav 
*/
