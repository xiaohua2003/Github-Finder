import React, {useState,useContext} from 'react';
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
const Search=()=>{
    const githubContext=useContext(GithubContext);
    const alertContext=useContext(AlertContext);
    const [text, setText]=useState('');
 const   onSubmit=e=> {
        e.preventDefault();
        if(text===''){
            alertContext.setAlert('Please enter userName','light');
        } else{
            
               githubContext.searchUsers(text);
            setText("");  
        } 
    }

  const  onChange=e=>{
        setText(e.target.value)
    }
        return (
                <div className="center">
                    <h2>Profile Finder for Github</h2>
                    <h5>Check out profile by entering a username!!!</h5>
                    <form className="form" onSubmit={onSubmit}>
                         <input type="text" className="searchInput" placeholder="Search Users" name="text" size="30" value={text} onChange={onChange}/>
                         <input type="submit" className='submit' value="Search"/> 
                     {githubContext.users.length>0 &&<button className="btn_clear" onClick={githubContext.clearUsers}>Clear</button>}
                    </form>
                </div>
                    
        )
    
}

export default Search
