import React, { Component } from 'react'
 import propTypes from "prop-types";
export class Search extends Component {
    state={
        text:''
    };
    static propTypes={
       searchUsers:propTypes.func.isRequired,
       clearUsers: propTypes.func.isRequired,
       showClear:propTypes.bool.isRequired
    }
    onSubmit=e=> {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text:''});

    }

    onChange=e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        return (
            <div>
                <h2>Profile Finder for Github</h2>
                 <h5>Check out profile by entering a username!!!</h5>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Search Users" name="text" size="30" value={this.state.text} onChange={this.onChange}/>
                     <input type="submit" className='submit' value="Search"/> 
                     {this.props.showClear&&<button className="btn_clear" onClick={this.props.clearUsers}>Clear</button>}
               </form>
            </div>
        )
    }
}

export default Search
