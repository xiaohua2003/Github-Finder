import Navbar from  "./Components/layOut/Navbar";
import Alert from  "./Components/layOut/Alert";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import User from "./Components/users/User";
import About from "./Components/Pages/About";
import NotFound from './Components/Pages/NotFound';
import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './App.css';
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
class App extends Component {
  
  
 
  render() {
   
    return (
      <GithubState>
      <AlertState>
      <Router>
      <div className="App">
       <Navbar />
       <div className="container">
          <Alert/>
         <Switch>
            <Route exact path="/" render={props=>(<Fragment>
            <Search />
            <Users />
           </Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" component={User}/>
            <Route component={NotFound}/>
         </Switch>
        </div>
         </div>
       </Router>
       </AlertState>
       </GithubState>
    );
  }
}

export default App;