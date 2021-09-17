import React ,{ Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
// import About from './About'
// import Contact from './Contact'

export default class Footer extends Component  {
    render() {
        return (
            <Router>
               <Switch> 
                <Route>
                <ul className='bar'>
                  <li><Link to='/about'>About me</Link></li>
                  <li><Link to='/contact'>Contact me</Link></li>
                  <li><Link to='/#'>Copyright</Link></li>
                </ul>
                </Route>
               </Switch>
            </Router>
        )
    }
}

