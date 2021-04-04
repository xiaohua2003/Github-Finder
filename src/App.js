import Navbar from  "./Components/layOut/Navbar";
import Users from "./Components/users/Users";
import React, {Component} from 'react';
import './App.css';
class App extends React.Component {
 
  render() {
   
    return (
      <div className="App">
       <Navbar />
       <div className="container">
       <Users/>
       </div>
      
      </div>
    );
  }
}

export default App;
