import Navbar from  "./Components/layOut/Navbar";
import Alert from  "./Components/layOut/Alert";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import User from "./Components/users/User";
import About from "./Components/Pages/About";
import React, {Component, Fragment} from 'react';
import axios from 'axios';
import './App.css';
import GithubState from "./context/github/GithubState"
class App extends Component {
  
  state={
    users:[],
    User:{},
    loading:false,
    alert:null
  }
 
 //search github users
 searchUsers=async (text)=>{
this.setState({loading:true});
const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
this.setState({users:res.data.items, loading:false});

 }
 //Get user
 getUser=async (username)=>{
   this.setState({loading:true});
   const res=await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({User:res.data, loading:false});
 }
 //clear users
 clearUsers =() => this.setState({users:[], loading:false});
 
 //set alert
 setAlert=(msg,type)=>{
   this.setState({alert:{msg, type}});
   setTimeout(()=>this.setState({alert:null}),1000)
 }
 
  render() {
   
    return (
      <GithubState>
      <Router>
      <div className="App">
       <Navbar />
       <div className="container">
          <Alert alert={this.state.alert}/>
         <Switch>
            <Route exact path="/" render={props=>(<Fragment>
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0 ? true:false} setAlert={this.setAlert}/>
            <Users loading={this.state.loading} users={this.state.users}/>
           </Fragment>
            )}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/user/:login" render={props=>(<User {...props} getUser={this.getUser} User={this.state.User} loading={this.state.loading}/>)}/>
         </Switch>
        </div>
         </div>
       </Router>
       </GithubState>
    );
  }
}

export default App;