import Navbar from  "./Components/layOut/Navbar";
import Footer from  "./Components/layOut/Footer";
import Users from "./Components/users/Users";
import Search from "./Components/users/Search";
import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
class App extends Component {
  
  state={
    users:[],
    loading:false
  }
 
 //search github users
 searchUsers=async (text)=>{
this.setState({loading:true});
const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
this.setState({users:res.data.items, loading:false});

 }
 //clear users
 clearUsers =() => this.setState({users:[], loading:false});
 
  render() {
   
    return (
      <div className="App">
       <Navbar />
       <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length>0 ? true:false}/>
       <Users loading={this.state.loading} users={this.state.users}/>
       </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
