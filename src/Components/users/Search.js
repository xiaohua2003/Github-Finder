import React, {useState} from 'react'
 import propTypes from "prop-types";
const Search=({searchUsers,showClear,clearUsers, setAlert})=>{
    const [text, setText]=useState('');
    
 const   onSubmit=e=> {
        e.preventDefault();
        if(text===''){
            setAlert('Please enter userName','light');
        } else{
            
               searchUsers(text);
            setText("");
    
        }
       
    }

  const  onChange=e=>{
        setText(e.target.value)
    }
  
        return (
            <div>
                <h2>Profile Finder for Github</h2>
                <h5>Check out profile by entering a username!!!</h5>
                <form className="form" onSubmit={onSubmit}>
                    <input type="text" placeholder="Search Users" name="text" size="30" value={text} onChange={onChange}/>
                     <input type="submit" className='submit' value="Search"/> 
                     {showClear&&<button className="btn_clear" onClick={clearUsers}>Clear</button>}
               </form>
            </div>
        )
    
}
Search. propTypes={
    searchUsers:propTypes.func.isRequired,
    clearUsers: propTypes.func.isRequired,
    showClear:propTypes.bool.isRequired,
    setAlert:propTypes.func.isRequired
 };
export default Search
