import React from 'react';
import propTypes from "prop-types";
const Navbar =(props)=>{
    
   
        return (
            <nav className="navbar bg-primary">
                
               <h1><i className={props.icon}></i>{props.title} </h1> 
               
            </nav>
        )
    
}
Navbar.defaultProps={
    title:"Github Finder",
    icon:"fa fa-github"
};
Navbar.propTypes={
    title: propTypes.string.isRequired,
    icon:propTypes.string.isRequired
};

export default Navbar
