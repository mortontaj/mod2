import React ,{ Component } from "react";
import Home from './Home'
import Api from './Api'
import About from './About_me'
import Contact from './Contact_me'

export default class Markettaj extends Component  {
    render() {
        return (
            <>
               <Home/>,
               <Api/>,
               <About/>,
               <Contact/>,
            </>
        )
    }
}