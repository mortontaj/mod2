import React ,{ Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import Api1 from "./Api1";
// import Home from './Home'
import Api2 from './Api2'


export default class NavBar extends Component  {
    render() {
        return (
            <Router>
            <Switch>
            <Route> 
               <ul className='bar'>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/Equity'>Equity</Link></li>
                  <li><Link to='/Exchange'>Exchange</Link><Api2/></li>
               </ul>
            </Route>
            </Switch>
            </Router>
        )
    }
}