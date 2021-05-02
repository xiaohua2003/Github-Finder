import React from 'react';
import propTypes from "prop-types";
import {Link} from "react-router-dom";
const Navbar =(props)=>{
    
   
        return (
            <nav className="navbar bg-primary">
                
               <h1><i className={props.icon}></i><span className="title">{props.title}</span></h1> 
               <ul className="narbar-R">
                   <li><Link to="/" className="navbar-right" >Home</Link></li>
                   <li><Link to="/about" className="navbar-right" >About</Link></li>
               </ul>
               
            </nav>
        )
    
}
Navbar.defaultProps={
    title:"Github Fetch",
    icon:"fa fa-github"
};
Navbar.propTypes={
    title: propTypes.string.isRequired,
    icon:propTypes.string.isRequired
};

export default Navbar
