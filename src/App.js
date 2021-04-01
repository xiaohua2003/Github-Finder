import Navbar from  "./Components/layOut/Navbar";
import UserItem from "./Components/users/UserItem";
import React, {Component} from 'react';
import './App.css';
class App extends React.Component {
  render() {
    
    return (
      <div className="App">
       <Navbar/>
      <UserItem/>
      </div>
    );
  }
}

export default App;
