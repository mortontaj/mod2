import React ,{ Component } from "react";
import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import Home from './Home'
import { Equity, Exchange} from './Api'

export default class NavBar extends Component  {
    render() {
        return (
            <Router> 
               <ul>
                  <li><link to='/'>Home</link><Home/></li>
                  <li><link to='/Equity'>Equity</link><Equity/></li>
                  <li><link to='/Exchange'>Exchange</link><Exchange/></li>
               </ul>
            </Router>
        )
    }
}